# FIX-001: Draft-expiring notification leads to completing the application, not ticking a task

**Status**: draft proposal by L, 2026-10-29. **Not accepted.** Needs S's triage and,
where it changes intended behaviour, the owner's checkpoint. S implements; L retests.
**Source evidence**: [RUN-001](RUN-001.md#f-001-complete-application-can-be-marked-done-while-the-draft-remains-unsubmitted), F-001.
**Tested pin**: `4e067fa6ecfc073263890ef7a029674cc3c4f917`.
**Relates to**: spec user story 1 #4 and FR-005; product D2, D6, D14; assumptions A-008, A-011.

## Problem

On the jobseeker's "Complete application" destination the only control is "Mark task
done". Using it records the task as done and clears "needs action", while the page and
notification still say the draft "has not been submitted yet". Two of three simulated
reviewers concluded the application was complete.

## Scope

Only the jobseeker draft-expiring item (fixture `n02`, Alex). Staff "Mark task done"
behaviour, email entry and other notifications are out of scope.

## Required behaviour

1. **Destination**: "Complete application" opens a simulated Cloud Solutions Architect
   application (clearly prototype) showing the draft status and closing date, with a
   primary action to submit or continue it. No generic "Mark task done" on this item.
2. **Completion follows the work**: the task becomes done only when the simulated
   application is submitted. Opening or reading the notification does not complete it.
3. **Afterward**: the destination shows the application as submitted (with the same
   vacancy title); the centre no longer lists the item as needing action, and its visible
   status no longer claims the draft is unsubmitted (e.g. "Submitted" state or a resolved
   label). Read state stays independent and visible.
4. **Return**: a working route back to notifications remains.
5. **Reset**: "Reset demo state" restores the unsubmitted draft.

Wording, layout and component choice are S's. Pragma/Vanilla component alignment is
**unverified** for both the current stand-in and this change.

## Acceptance (retest)

Repeat RUN-001's neutral task unchanged, from careers home with Alex pre-seeded, on the
pinned fix commit, with at least the model families available in RUN-001. Pass when the
reviewer can submit the application and, afterward, sees the application as submitted
and no contradicting "not been submitted" text, with needs-action cleared.

## Traceability

| Assumption | Journey/source | Finding | Decision | Fix | Commit | Retest |
|---|---|---|---|---|---|---|
| A-008, A-011 | J-CAREERS-CENTRE, careers home, n02 | F-001 | pending S triage | this draft | `487831cf` (S's J-EMAIL-DRAFT slice) | [RUN-002](RUN-002.md): pass 3/3 |
