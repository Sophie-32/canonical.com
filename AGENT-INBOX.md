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
