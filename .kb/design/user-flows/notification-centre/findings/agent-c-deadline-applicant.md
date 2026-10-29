# Findings: Agent C, deadline-driven applicant

Run: 2026-10-29, mostly 390px mobile plus one desktop pass, against the published demo (build `cd7443df`). Agent was an AI role-playing the persona from the [validation plan](../validation.md); not a real user.

| # | Task | Result | Evidence |
| :-- | :-- | :-- | :-- |
| 1 | Find notifications (mobile) | Pass | Bell visible in the header at 390px, labelled with the unread count |
| 2 | Unread, actions, deadline | Partial | Counts shown; deadline is "closes in 3 days" with no date, time or time zone. "Sun 1 Nov" appears only on the next page |
| 3 | Complete the task | Partial | "Mark task done" works but there is no "submitted/received" confirmation or next steps |
| 4 | Read vs needs action | Pass | After completion: "3 unread · 0 need action"; row reads "Read · Done by …" |
| 5 | Reload and Mark all as read | Pass | State persisted; mark-all left task state alone |
| 6 | Accessibility and oddities | Partial | See below |

## Findings

**Confusing**
- (High) Deadline has no time or time zone anywhere.
- (High) "Done by {name}" is not a submission confirmation; nothing says the application was received.
- (Med) Opening marks read; unclear whether that means seen or done.
- (Med) After completion the row title and body still say "draft closes in 3 days" and "has not been submitted yet", contradicting "Done"; the link text becomes a bare "View".
- (Med) "Needs action" filter is empty after completion; unclear whether the item was resolved or lost.
- (Low) Title and "›" link both go to the same page, so screen readers hear duplicates.

**Missing**
- (High) No real application page or list of what is left to fill in.
- (Med) No receipt for the Cloud Solutions Architect application (the only "Application received" is for another job).
- (Med) No reminder or undo.
- (Low) No live-region announcement when counts change or on mark-all / mark-done.

**Bugs**
- (Low) Bell's visible text is only the count in a colour badge (aria-label is good).
- (Low) Cookie dialog stays in the way on mobile (belongs to the copied live site, not the prototype).

**Visible but should not be**
- (Med) Persona switcher and Reset demo state, naming other roles.
- (Low) Signed-in email shown in the intro.

**Accessibility**
- Good: status in text not colour alone; one H1; tablist with accessible name; bell label includes count.
- Weak: headings skip H1 to H3; no `aria-live` or `role=status`.

## Agent's top recommendations
1. Full deadline with time zone, in the row, detail page and reminders.
2. Explicit confirmation after completion ("Application submitted, we've received it"), update the row text to match, announce via a live region.
3. Remove the switcher from the jobseeker view; do not mark task notifications read on open.

Back to [consolidated findings](consolidated.md).
