/* Careers notification centre prototype. Fictional data; state in localStorage. */
(function () {
  var SCRIPT = document.currentScript || document.querySelector('script[src$="app/notifications.js"]');
  var BASE = new URL('./', SCRIPT.src); // careers/app/
  var KEY = 'careers-notif-v1';

  var PERSONAS = {
    alex: { id: 'alex', name: 'Alex Morgan', role: 'jobseeker', label: 'Jobseeker', email: 'alex.morgan@example.com',
      entitlements: ['alex'], groups: [['application', 'Applications'], ['match', 'Matches and searches']],
      blurb: 'Updates about your applications, matching roles and saved searches.' },
    priya: { id: 'priya', name: 'Priya Nair', role: 'hiring-manager', label: 'Hiring manager', email: 'priya.nair@canonical.com',
      entitlements: ['vacancy:ubuntu-foundations'], groups: [['candidate', 'Candidates'], ['vacancy', 'Vacancies']],
      blurb: 'Candidates and vacancies you own: Ubuntu Foundations.' },
    sam: { id: 'sam', name: 'Sam Okafor', role: 'recruiter', label: 'Recruiter', email: 'sam.okafor@canonical.com',
      entitlements: ['portfolio:engineering'], groups: [['task', 'Hiring tasks'], ['vacancy', 'Vacancies']],
      blurb: 'Hiring tasks across your engineering portfolio.' }
  };

  // severity: INFO | MEDIUM | HIGH. doneBy seeds a task already resolved by someone else.
  var N = [
    // Jobseeker
    { id: 'n01', event: 'application_progressed', roles: ['jobseeker'], scope: 'alex', group: 'application', sev: 'INFO', positive: true, actionable: false,
      title: 'Your application moved to interview', body: 'Senior Software Engineer, Ubuntu Foundations: the hiring team would like to schedule a first call.',
      ctx: { Vacancy: 'Senior Software Engineer, Ubuntu Foundations', Stage: 'Interview' }, action: 'View application', when: 'Today, 8:03 AM', ts: 20 },
    { id: 'n02', event: 'application_draft_expiring', roles: ['jobseeker'], scope: 'alex', group: 'application', sev: 'MEDIUM', actionable: true,
      title: 'Complete your application: draft closes Sun 1 Nov, 11:59 PM UTC', body: 'Your draft for Cloud Solutions Architect (REQ-CSA-02) has not been submitted yet.',
      ctx: { Vacancy: 'Cloud Solutions Architect', Requisition: 'REQ-CSA-02 · Remote, EMEA', Closes: 'Sun 1 Nov 2026, 11:59 PM UTC' }, action: 'Complete application', when: 'Wed 28 Oct, 5:40 PM', ts: 18,
      doneTitle: 'Application submitted: Cloud Solutions Architect', doneBody: 'REQ-CSA-02 was submitted and received. We will update you here when the status changes.', doneLabel: 'View application' },
    { id: 'n03', event: 'vacancy_match', roles: ['jobseeker'], scope: 'alex', group: 'match', sev: 'INFO', actionable: false,
      title: '7 new job postings match your skills', body: 'Based on your profile: Python, Kubernetes, Linux.',
      ctx: { Skills: 'Python, Kubernetes, Linux' }, action: 'View matching roles', href: '../all/index.html', when: 'Today, 9:12 AM', ts: 21 },
    { id: 'n04', event: 'saved_search_match', roles: ['jobseeker'], scope: 'alex', group: 'match', sev: 'INFO', actionable: false,
      title: '3 new roles for your saved search "Engineering, Remote"', body: 'New engineering roles that can be done from anywhere.',
      ctx: { 'Saved search': 'Engineering, Remote' }, action: 'Browse roles', href: '../engineering/index.html', when: 'Yesterday, 11:15 AM', ts: 17 },
    { id: 'n05', event: 'application_received', roles: ['jobseeker'], scope: 'alex', group: 'application', sev: 'INFO', actionable: false, readSeed: true,
      title: 'Application received', body: 'We received your application for Senior Software Engineer, Ubuntu Foundations.',
      ctx: { Vacancy: 'Senior Software Engineer, Ubuntu Foundations' }, action: 'View application', when: 'Mon, 12 Oct', ts: 10 },
    { id: 'n06', event: 'application_closed', roles: ['jobseeker'], scope: 'alex', group: 'application', sev: 'INFO', actionable: false, readSeed: true,
      title: 'Application closed: Marketing Manager', body: 'This role has been filled. Thank you for applying.',
      ctx: { Vacancy: 'Marketing Manager' }, action: 'See similar roles', href: '../marketing/index.html', when: 'Thu, 1 Oct', ts: 5 },
    // Hiring manager
    { id: 'n11', event: 'candidate_review_needed', roles: ['hiring-manager'], scope: 'vacancy:ubuntu-foundations', group: 'candidate', sev: 'HIGH', actionable: true,
      title: 'A candidate needs your review', body: 'A recruiter screen is complete. Your review is the next step before the panel interview.',
      ctx: { Candidate: 'Candidate #4821', Vacancy: 'Senior Software Engineer, Ubuntu Foundations', Stage: 'Hiring manager review' }, action: 'Review candidate', when: 'Today, 9:30 AM', ts: 22 },
    { id: 'n12', event: 'candidate_review_needed', roles: ['hiring-manager'], scope: 'vacancy:ubuntu-foundations', group: 'candidate', sev: 'HIGH', actionable: true,
      title: '3 candidates are waiting on Senior Software Engineer', body: 'Three reviews are open for the same vacancy.',
      ctx: { Vacancy: 'Senior Software Engineer, Ubuntu Foundations', Waiting: '3 candidates' }, action: 'Open vacancy', when: 'Today, 7:10 AM', ts: 19 },
    { id: 'n13', event: 'interview_scheduling_needed', roles: ['hiring-manager'], scope: 'vacancy:ubuntu-foundations', group: 'candidate', sev: 'MEDIUM', actionable: true,
      title: 'Pick interview slots for Candidate #4790', body: 'The candidate is ready to book once you offer availability.',
      ctx: { Candidate: 'Candidate #4790' }, action: 'Pick interview slots', when: 'Yesterday, 3:20 PM', ts: 16 },
    { id: 'n14', event: 'vacancy_closing', roles: ['hiring-manager', 'recruiter'], scope: 'vacancy:ubuntu-foundations', group: 'vacancy', sev: 'MEDIUM', actionable: true,
      title: 'Vacancy closing in 5 days', body: 'Senior Software Engineer, Ubuntu Foundations closes on 3 Nov. Close it or extend it.',
      ctx: { Vacancy: 'Senior Software Engineer, Ubuntu Foundations', Closes: 'Tue 3 Nov' }, action: 'Open vacancy', when: 'Wed, 28 Oct', ts: 15 },
    { id: 'n15', event: 'review_submitted', roles: ['hiring-manager'], scope: 'vacancy:ubuntu-foundations', group: 'candidate', sev: 'INFO', actionable: false, readSeed: true,
      title: 'Review submitted by a panel colleague', body: 'Jordan Lee submitted a review for Candidate #4702.',
      ctx: { Candidate: 'Candidate #4702', Reviewer: 'Jordan Lee' }, action: 'View review', when: 'Mon, 26 Oct', ts: 12 },
    { id: 'n16', event: 'candidate_review_needed', roles: ['hiring-manager'], scope: 'vacancy:ubuntu-foundations', group: 'candidate', sev: 'HIGH', actionable: false, doneBy: 'Jordan Lee', readSeed: false,
      title: 'A candidate needs your review', body: 'This review was completed by a colleague on the hiring panel.',
      ctx: { Candidate: 'Candidate #4755', Vacancy: 'Senior Software Engineer, Ubuntu Foundations' }, action: 'View review', when: 'Tue, 27 Oct', ts: 13 },
    // Recruiter
    { id: 'n21', event: 'interview_feedback_overdue', roles: ['recruiter'], scope: 'portfolio:engineering', group: 'task', sev: 'HIGH', actionable: true,
      title: 'Interview feedback is overdue', body: 'Feedback for the technical interview with Candidate #4821 was due 2 days ago.',
      ctx: { Candidate: 'Candidate #4821', Interviewer: 'Chris Wu', Overdue: '2 days' }, action: 'Open hiring task', when: 'Today, 8:45 AM', ts: 20 },
    { id: 'n22', event: 'interview_feedback_overdue', roles: ['recruiter'], scope: 'portfolio:engineering', group: 'task', sev: 'HIGH', actionable: true,
      title: '9 feedback tasks are overdue in Engineering', body: 'Overdue feedback is concentrated in two teams. Review them together.',
      ctx: { Team: 'Engineering', Overdue: '9 tasks' }, action: 'Open hiring task', when: 'Today, 7:00 AM', ts: 18 },
    { id: 'n23', event: 'candidate_stalled', roles: ['recruiter'], scope: 'portfolio:engineering', group: 'task', sev: 'MEDIUM', actionable: true,
      title: 'Candidate #4790 has been in stage for 10 days', body: 'No movement since the technical interview.',
      ctx: { Candidate: 'Candidate #4790', Stage: 'Technical interview', Days: '10' }, action: 'Open hiring task', when: 'Yesterday, 2:00 PM', ts: 16 },
    { id: 'n24', event: 'vacancy_closing', roles: ['hiring-manager', 'recruiter'], scope: 'portfolio:engineering', group: 'vacancy', sev: 'MEDIUM', actionable: true,
      title: 'Vacancy closing in 5 days', body: 'Cloud Solutions Architect closes on 3 Nov.',
      ctx: { Vacancy: 'Cloud Solutions Architect', Closes: 'Tue 3 Nov' }, action: 'Open vacancy', when: 'Wed, 28 Oct', ts: 14 },
    { id: 'n25', event: 'feedback_logged', roles: ['recruiter'], scope: 'portfolio:engineering', group: 'task', sev: 'INFO', actionable: false, doneBy: 'Dana Whitfield', readSeed: false,
      title: 'Interview feedback overdue for Candidate #4755: resolved', body: 'Dana Whitfield, another recruiter on your portfolio, chased the interviewer and logged the feedback.',
      ctx: { Candidate: 'Candidate #4755' }, action: 'View hiring task', when: 'Tue, 27 Oct', ts: 13 }
  ];
  N.forEach(function (n) { if (n.doneBy) n.actionable = false; });

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(s) { localStorage.setItem(KEY, JSON.stringify(s)); }
  var S = load();
  S.persona = S.persona && PERSONAS[S.persona] ? S.persona : 'alex';
  S.read = S.read || {};   // per persona: id -> true
  S.done = S.done || {};   // shared per role: id -> name
  S.done = S.done || {};
  save(S);

  function persona() { return PERSONAS[S.persona]; }
  function visible(p) {
    return N.filter(function (n) { return n.roles.indexOf(p.role) > -1 && p.entitlements.indexOf(n.scope) > -1; })
      .sort(function (a, b) { return b.ts - a.ts; });
  }
  function key(n) { return S.persona + ':' + n.id; }
  function isDone(n) { return !!(n.doneBy || S.done[n.id]); }
  function doneBy(n) { return n.doneBy || S.done[n.id]; }
  function needsAction(n) { return n.actionable && !isDone(n); }
  // Resolved-before-read counts as read, so the bell only counts things still unseen and open
  function isRead(n) { return !!(S.read[key(n)] || n.readSeed || isDone(n)); }
  function unreadCount(p) { return visible(p).filter(function (n) { return !isRead(n); }).length; }

  function markRead(n) { S.read[key(n)] = true; save(S); }
  function markDone(n) { S.done[n.id] = persona().name; S.read[key(n)] = true; save(S); }

  function updateBell() {
    var c = unreadCount(persona());
    var b = document.querySelectorAll('.js-notif-badge');
    for (var i = 0; i < b.length; i++) { b[i].textContent = c; b[i].style.display = c ? '' : 'none'; }
    var l = document.querySelectorAll('#js-notif-desktop, #js-notif-mobile');
    for (var j = 0; j < l.length; j++) l[j].setAttribute('aria-label', 'Notifications, ' + c + ' unread');
  }

  function el(t, cls, txt) { var e = document.createElement(t); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function detailUrl(n) { return n.href ? new URL(n.href, location.href).href : new URL('index.html?n=' + n.id, BASE).href; }

  var CLS = { INFO: 'information', MEDIUM: 'caution', HIGH: 'negative' };

  // ---- Notification centre page ----
  function renderCentre() {
    var root = document.getElementById('notif-app');
    var filter = 'all';
    function paint() {
      var p = persona(), list = visible(p);
      document.getElementById('notif-name').textContent = p.name;
      document.getElementById('notif-who').textContent = p.label + ' · ' + p.email + '. ' + p.blurb;
      var pe = document.getElementById('persona-switch').querySelectorAll('button');
      for (var i = 0; i < pe.length; i++) pe[i].setAttribute('aria-selected', pe[i].dataset.persona === p.id);
      var f = document.getElementById('notif-filters'); f.textContent = '';
      var defs = [['all', 'All'], ['unread', 'Unread'], ['action', 'Needs action']].concat(p.groups);
      defs.forEach(function (d) {
        var b = el('button', 'p-segmented-control__button', d[1]); b.setAttribute('role', 'tab');
        b.setAttribute('aria-selected', d[0] === filter); b.dataset.filter = d[0]; f.appendChild(b);
      });
      var shown = list.filter(function (n) {
        if (filter === 'all') return true;
        if (filter === 'unread') return !isRead(n);
        if (filter === 'action') return needsAction(n);
        return n.group === filter;
      });
      var ul = document.getElementById('notif-list'); ul.textContent = '';
      shown.forEach(function (n) {
        var li = el('li', 'p-list__item'); li.dataset.id = n.id;
        var unread = !isRead(n), done = isDone(n);
        var cls = n.positive ? 'positive' : CLS[n.sev];
        var box = el('div', 'p-notification--' + cls + ' is-borderless');
        if (done) box.style.opacity = '.6';
        if (unread) { box.style.borderLeft = '4px solid #0e8420'; box.style.paddingLeft = '.5rem'; }
        var c = el('div', 'p-notification__content');
        var h = el('h3', 'p-notification__title');
        var a = el('a', null, done && n.doneTitle ? n.doneTitle : n.title); a.href = detailUrl(n);
        a.style.fontWeight = unread ? '700' : '400';
        h.appendChild(a); c.appendChild(h);
        c.appendChild(el('p', 'p-notification__message', done && n.doneBody ? n.doneBody : n.body));
        var meta = el('p', 'p-text--small u-text--muted');
        var bits = [n.when, unread ? 'Unread' : 'Read'];
        if (done) bits.push(doneBy(n) ? 'Done by ' + doneBy(n) : 'Done');
        else if (n.actionable) bits.push('Needs action');
        meta.textContent = bits.join(' · ');
        c.appendChild(meta);
        var act = el('p', null);
        var link = el('a', null, (done ? (n.doneLabel || (n.action.indexOf('View') === 0 ? n.action : 'View')) : n.action) + ' ›');
        link.href = a.href; link.dataset.open = n.id; act.appendChild(link); c.appendChild(act);
        box.appendChild(c); li.appendChild(box); ul.appendChild(li);
      });
      document.getElementById('notif-count').textContent = shown.length;
      document.getElementById('notif-unread').textContent = unreadCount(p);
      document.getElementById('notif-needs').textContent = list.filter(needsAction).length;
      document.getElementById('notif-empty').classList.toggle('u-hide', shown.length > 0);
      updateBell();
    }
    document.getElementById('persona-switch').addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      S.persona = b.dataset.persona; save(S); filter = 'all'; paint();
    });
    document.getElementById('notif-filters').addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return; filter = b.dataset.filter; paint();
    });
    document.getElementById('notif-list').addEventListener('click', function (e) {
      var a = e.target.closest('a'); if (!a) return;
      var li = a.closest('li'); var n = N.filter(function (x) { return x.id === li.dataset.id; })[0];
      markRead(n);
    });
    document.getElementById('notif-mark-all').addEventListener('click', function () {
      visible(persona()).forEach(function (n) { S.read[key(n)] = true; }); save(S); paint();
    });
    document.getElementById('notif-reset').addEventListener('click', function () {
      S = { persona: S.persona, read: {}, done: {}, signedIn: false }; save(S); paint();
    });
    paint();
  }

  // ---- Workspace stand-in (target of every action) ----
  function renderDetail() {
    var id = new URLSearchParams(location.search).get('n');
    var n = N.filter(function (x) { return x.id === id; })[0];
    var root = document.getElementById('notif-detail');
    var p = persona();
    if (!n || n.roles.indexOf(p.role) < 0 || p.entitlements.indexOf(n.scope) < 0) {
      root.innerHTML = '<h1 class="p-heading--2">Not available</h1><p>This item is not visible to <strong></strong>. Switch persona on the notifications page.</p>';
      root.querySelector('strong').textContent = p.name;
      return;
    }
    markRead(n); updateBell();
    function paintDraft() {
      root.textContent = '';
      var done = isDone(n);
      root.appendChild(el('p', 'p-heading--5', 'Prototype workspace · ' + p.label));
      root.appendChild(el('h1', 'p-heading--2', 'Complete application'));
      var snap = el('table'); var sb = el('tbody');
      [['Role', n.ctx.Vacancy], ['Requisition', n.ctx.Requisition], ['Status', done ? 'Submitted' : 'Draft, not submitted'],
       ['Closes', n.ctx.Closes], ['Saved in your draft', 'CV, contact details, 4 of 4 screening answers']].forEach(function (r) {
        var tr = el('tr'); tr.appendChild(el('th', null, r[0])); tr.appendChild(el('td', null, r[1])); sb.appendChild(tr);
      });
      snap.appendChild(sb); root.appendChild(snap);
      var live = el('div'); live.setAttribute('role', 'status'); root.appendChild(live);
      var bar = el('p');
      if (done) {
        var d = el('div', 'p-notification--positive'); var dc = el('div', 'p-notification__content');
        dc.appendChild(el('h2', 'p-notification__title', 'Application submitted'));
        dc.appendChild(el('p', 'p-notification__message', 'Received ' + (S.receipt || 'just now') + '. Your application for ' + n.ctx.Vacancy + ' (REQ-CSA-02) is with the hiring team. Updates will appear in your notification centre.'));
        d.appendChild(dc); live.appendChild(d);
      } else {
        root.appendChild(el('p', null, 'Review your saved draft, then submit before the closing date. Nothing else is required.'));
        var b = el('button', 'p-button--positive', 'Submit application');
        b.addEventListener('click', function () {
          S.receipt = new Date().toLocaleString('en-GB', { timeZone: 'UTC', weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) + ' UTC';
          markDone(n); paintDraft();
        });
        bar.appendChild(b);
      }
      var back = el('a', 'p-button', done ? 'Back to notifications ›' : '‹ Back to notifications'); back.href = '../notifications/index.html';
      bar.appendChild(back); root.appendChild(bar);
      root.appendChild(el('p', 'p-text--small u-text--muted', 'Demo only: simulated application form; nothing is sent.'));
    }
    if (n.id === 'n02') { paintDraft(); return; }
    function paint() {
      root.textContent = '';
      var done = isDone(n);
      root.appendChild(el('p', 'p-heading--5', 'Prototype workspace · ' + p.label));
      root.appendChild(el('h1', 'p-heading--2', n.action));
      root.appendChild(el('p', null, n.title + '. ' + n.body));
      var t = el('table'); var tb = el('tbody');
      Object.keys(n.ctx).forEach(function (k) {
        var r = el('tr'); r.appendChild(el('th', null, k)); r.appendChild(el('td', null, n.ctx[k])); tb.appendChild(r);
      });
      t.appendChild(tb); root.appendChild(t);
      var st = el('p', 'p-text--small u-text--muted', 'Notification: Read · Task: ' + (done ? (doneBy(n) ? 'Done by ' + doneBy(n) : 'Done') : (n.actionable ? 'Needs action' : 'No action required')));
      root.appendChild(st);
      var bar = el('p');
      if (n.actionable && !done) {
        var b = el('button', 'p-button--positive', 'Mark task done');
        b.addEventListener('click', function () { markDone(n); paint(); });
        bar.appendChild(b);
      }
      var back = el('a', 'p-button', '‹ Back to notifications'); back.href = '../notifications/index.html';
      bar.appendChild(back); root.appendChild(bar);
      root.appendChild(el('p', 'p-text--small u-text--muted', 'Demo only: in the real product this opens the application, candidate review or hiring task.'));
    }
    paint();
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateBell();
    if (document.getElementById('notif-list')) renderCentre();
    if (document.getElementById('notif-detail')) renderDetail();
  });
})();
