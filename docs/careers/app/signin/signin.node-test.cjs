const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];

function redirect(next, signedIn, prefix = '', signinPath = '/careers/app/signin/index.html') {
  const url = new URL(`https://example.test${prefix}${signinPath}`);
  if (next !== null) url.searchParams.set('next', next);
  let destination;
  const button = {};
  const context = {
    URL,
    URLSearchParams,
    location: { href: url.href, pathname: url.pathname, search: url.search, replace(value) { destination = value; } },
    localStorage: {
      getItem() { return signedIn ? JSON.stringify({ persona: 'alex', signedIn: true }) : null; },
      setItem() {},
    },
    document: { getElementById() { return button; } },
  };
  vm.runInNewContext(script, context);
  if (!signedIn) button.onclick();
  return destination;
}

test('preserves the email destination for both session states and hosting prefixes', () => {
  for (const signedIn of [false, true]) {
    assert.equal(redirect('../index.html?n=n02', signedIn, '/preview'),
      'https://example.test/preview/careers/app/index.html?n=n02');
  }
});

test('rejects external, executable, escaping and malformed destinations', () => {
  const unsafe = [
    'https://evil.test/', '//evil.test/', 'javascript:alert(1)',
    '../../..', '/preview/careers-evil/', '../%2e%2e/%2e%2e/admin',
    '../%2f..%2fadmin', '../%252e%252e/admin', '../..;/..;/admin',
    '\\\\evil.test/', 'java\tscript:alert(1)', 'http://[',
  ];
  for (const signedIn of [false, true]) {
    for (const next of unsafe) {
      assert.equal(redirect(next, signedIn, '/preview'),
        'https://example.test/preview/careers/notifications/index.html', next);
    }
  }
});

test('does not widen the allowed path when the sign-in URL has no trailing slash', () => {
  for (const signedIn of [false, true]) {
    assert.equal(redirect('/preview/admin/', signedIn, '/preview', '/careers/app/signin'),
      'https://example.test/preview/careers/notifications/index.html');
    assert.equal(redirect('../index.html?n=n02', signedIn, '/preview', '/careers/app/signin'),
      'https://example.test/preview/careers/app/index.html?n=n02');
  }
});

test('defaults to the notification centre when no destination is provided', () => {
  assert.equal(redirect(null, false), 'https://example.test/careers/notifications/index.html');
});