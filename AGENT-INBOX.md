# Agent inbox

Transient agent handoffs belong here. Name the recipient, scope, artifact link
and requested action. Save durable findings in the owning package's `reviews/`.
Preserve unresolved handoffs until receipt and resolution or durable transfer.

## S's harness - journey input handoff ready

Recipient: S. Scope: personas, entry assumptions and journeys on
`workshop/s-journeys-personas`. Read [S's brief](docs/handoffs/S.md), the
[assumptions](.kb/design/assumptions.md) and
[scenario seeds](.kb/design/user-flows/notification-centre/entry-contexts.md).
Requested action: flesh out the source-message -> subject -> notification ->
destination journeys and hand L the selected scenarios/fixture mapping.
This is prepared input; S's receipt/execution is not yet recorded.

## L's harness - evaluation handoff ready

Recipient: L. Scope: remaining workflow/specifications/evidence on
`workshop/l-evaluation-records`. Read [L's brief](docs/handoffs/L.md).
Requested action: use S's journey handoff to prepare independent Copilot reviews
and the assumption/finding/decision/fix/retest record. No review result is implied.
Immediate action: [Round 0](specs/001-notification-centre/reviews/round-0.md) is
ready against the existing centre; start it while S develops the next slice.

## S's harness - receipt and slice handoff for L

Recipient: L. Scope: J-EMAIL-DRAFT on `workshop/s-journeys-personas`.
Receipt: S has received the journey input handoff above and executed it.
Artifact: [journey record](.kb/design/user-flows/notification-centre/journeys/j-email-draft.md).
Requested action: evaluate commit `487831cf` (a later commit may only add this note).
- Serve: `cd docs && python3 -m http.server 8010`
- Entry: `http://localhost:8010/careers/app/mail/index.html`
- Persona/session: Alex Morgan, signed out; sign-in is simulated.
- Reset: reset control on the notifications page, or clear site data.
- Fixtures: email -> n02 -> `careers/app/index.html?n=n02`; mapping in the journey record.
- Assumptions (hypotheses): A-002, A-007, A-008, A-011, partly A-009.
Please send findings here or in `reviews/`; S will triage the highest-impact one.

## L's harness - CP1 owner acceptance

Recipient: L. Scope: `001-notification-centre/spec-r3`, CP1.
The owner replied "accept cp1" on 2026-10-29. Please review the
[owner's acceptance handoff](INBOX.md#owner-acceptance-of-cp1), record the verdict
in the spec package and update its checkpoint table on
`workshop/l-evaluation-records`. This acceptance is not evidence that the
prototype meets the spec or has passed a walkthrough.

## S's harness - F-001, F-005 and B-001 follow-up for L

Recipient: L. Scope: J-EMAIL-DRAFT on `workshop/s-journeys-personas`.
S accepts F-001, F-005 and B-001. D17 records that simulated submission resolves
the draft; D18 records the clearer confirmation. The assumption register links
the simulated evidence without treating it as human research. The F-005 and
B-001 changes need L's original-task retest on an exact committed revision;
this note was drafted before that revision was committed or handed over.

- n02 displays a positive submitted confirmation with the saved receipt time.
	Old n02 completion state without a receipt is reset to needing action.
- Sign-in redirects are limited to the same-origin hosted careers subtree.
- Run `node --test docs/careers/app/signin/signin.node-test.cjs docs/careers/app/notifications.node-test.cjs`.
- Local checks passed, including a browser check of the valid sign-in link and
	a `javascript:` fallback. The notification check dispatched the submit event
	after local-file UI overlays blocked physical clicks; it is not L's retest.
- Source-only adversarial follow-up by Claude Opus 5.5 (Copilot), on base
	`caca18b4e1551a999d7cc00ca3e38ab9cde10665` plus uncommitted changes, found no
	remaining material issues. Reviewed SHA-256 prefixes: sign-in page `fc68286f`,
	sign-in test `96ef2fb4`, notification script `ab9d61c1`, notification test
	`387fcc8b`, product notes `e43462fe`, assumptions `045aff48`.

For the older findings at `cb9c7a2f`, S proposes retaining them in place and
linking them from the review index as historical simulated evidence, rather
than moving or duplicating them. Please confirm or propose an alternative.

**Retest handoff**: Fix commit `58ca6cd8307ddc035c531f0bd7beadd3387381e3`,
published on `workshop/s-journeys-personas`. Serve a clean checkout of that
revision with `cd docs && python3 -m http.server 8010`, then start at
`http://localhost:8010/careers/app/mail/index.html`. Clear site data before each
run; the reset control preserves the selected persona. Start signed out as Alex.
The source is EMAIL-03, application APP-02/JOB-02 and notification `n02`; the
workspace is `careers/app/index.html?n=n02`. No real email or authentication is
used; the expired-deadline state is not implemented. The sign-in page's fixed
destination text may be inaccurate when an invalid redirect uses the fallback.
Please repeat RUN-003's original task and separately verify B-001 on this pin.
