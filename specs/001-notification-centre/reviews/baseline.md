# Imported experience baseline

**Source**: `origin/notification-centre` at
`9d0155cdaf908b832dfe4ff154afb89b787760a8`, pulled 2026-10-29.
**Evidence type**: repository/source inspection, not a browser walkthrough.

The colleague built the persona-driven static prototype and wrote product,
component and journey notes before this foundation package was shared. Those
files remain the experience owner's work. The current branch adds shared
foundations; it does not claim authorship or validation of the imported UI.

## Existing surfaces

Update on 2026-10-29: S's original branch history was rewritten, and its new tip
is `4e067fa6ecfc073263890ef7a029674cc3c4f917`. The prototype UI/assets match the
original baseline exactly. S's external-reference cleanup and new journey/
resilience documentation were imported as ordinary commits without overwriting
the workshop foundations. [Round 0](round-0.md) uses the new full revision as its pin.

- `docs/careers/index.html`: careers entry with notification navigation.
- `docs/careers/notifications/index.html`: centre and demo persona selector.
- `docs/careers/app/index.html?n=<id>`: simulated workspace.
- `docs/careers/app/notifications.js`: three personas, synthetic messages,
  audience checks, filters, state and rendering in one file.
- `.kb/design/`: product/design decisions, component contract, use cases and build notes.

## Differences for joint triage

These are source-level differences, not numbered usability findings and not
automatic instructions to change the colleague's prototype.

| Topic | Existing implementation/notes | Draft acceptance proposal | Decision owner |
|---|---|---|---|
| Completed versus read | `isRead` includes task completion; product build note D10 excludes completed tasks from the unread count | Personal read and shared completion remain independent | Experience owner with evaluation evidence |
| Entry | Careers bell opens the centre list | A specific careers notification can also open its matching centre item | Both agree the intended entry scenario |
| Identity/fixtures | Alex, Priya and Sam; persona control on the centre; reset preserves persona | Adds signed-out, empty-feed and another recipient of a shared task for acceptance checks | Experience owner supplies agreed fixtures |
| Design vocabulary | Severity maps to notification styles; product questions remain open | Avoid importing technical incident vocabulary without a demonstrated careers need | Experience owner |
| Review storage | Original jobseeker plan named `.kb/.../findings/` | One evidence home under this package's `reviews/`, linked from the validation bridge | Evaluation owner |

Keep findings tied to an actual tested commit. Do not manufacture stumbling
evidence from this list. Record any agreed change in the product decision log and
link its finding/spec/implementation/retest through the review record.
