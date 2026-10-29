const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const script = fs.readFileSync(path.join(__dirname, 'notifications.js'), 'utf8');

function render(state) {
  function element(tag = 'div') {
    let text = '';
    return {
      tag, children: [], dataset: {}, style: {}, className: '',
      classList: { toggle() {} },
      set textContent(value) { text = value; this.children = []; },
      get textContent() { return text + this.children.map(child => child.textContent).join(''); },
      appendChild(child) { this.children.push(child); return child; },
      setAttribute() {}, addEventListener() {}, querySelectorAll() { return []; },
    };
  }
  const ids = ['notif-app', 'notif-name', 'notif-who', 'persona-switch', 'notif-filters',
    'notif-list', 'notif-count', 'notif-unread', 'notif-needs', 'notif-empty',
    'notif-mark-all', 'notif-reset'];
  const nodes = Object.fromEntries(ids.map(id => [id, element()]));
  let stored = JSON.stringify(state);
  let ready;
  const document = {
    currentScript: { src: 'https://example.test/preview/careers/app/notifications.js' },
    createElement: element,
    getElementById(id) { return nodes[id] || null; },
    querySelectorAll() { return []; },
    addEventListener(event, callback) { if (event === 'DOMContentLoaded') ready = callback; },
  };
  vm.runInNewContext(script, {
    document, URL, URLSearchParams,
    location: { href: 'https://example.test/preview/careers/notifications/index.html' },
    localStorage: { getItem() { return stored; }, setItem(key, value) { stored = value; } },
  });
  ready();
  return { row: nodes['notif-list'].children.find(child => child.dataset.id === 'n02'), state: JSON.parse(stored) };
}

test('submitted draft shows a positive confirmation with its receipt time', () => {
  const result = render({ persona: 'alex', read: {}, done: { n02: 'Alex Morgan' }, receipt: 'Thu 29 Oct, 21:06 UTC' });
  assert.match(result.row.children[0].className, /p-notification--positive/);
  assert.equal(result.row.children[0].style.opacity, undefined);
  assert.match(result.row.textContent, /Submitted Thu 29 Oct, 21:06 UTC/);
  assert.doesNotMatch(result.row.textContent, /Wed 28 Oct/);
});

test('legacy done state without a receipt does not claim submission', () => {
  const result = render({ persona: 'alex', read: {}, done: { n02: 'Alex Morgan', n11: 'Priya Nair' } });
  assert.equal(result.state.done.n02, undefined);
  assert.equal(result.state.done.n11, 'Priya Nair');
  assert.match(result.row.children[0].className, /p-notification--caution/);
  assert.match(result.row.textContent, /Needs action/);
  assert.doesNotMatch(result.row.textContent, /Application submitted/);
});