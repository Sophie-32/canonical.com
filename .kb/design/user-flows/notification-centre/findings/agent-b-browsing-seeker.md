# Findings: Agent B, browsing seeker

Run: 2026-10-29, desktop 1280px plus one mobile pass (mobile checked from page text only, no visual check), against the published demo (build `cd7443df`). Agent was an AI role-playing the persona from the [validation plan](../validation.md); not a real user.

| # | Task | Result | Evidence |
| :-- | :-- | :-- | :-- |
| 1 | Find notifications | Pass | Bell with count 4 links to the centre |
| 2 | Unread count and priority | Pass | "6 shown · 4 unread · 1 need action" |
| 3 | Match notification destination | **Fail** | "7 new job postings" opens the generic list of 313 roles, no "new" markers; "3 new roles" opens the Engineering landing page, no list of the 3 and no remote filter |
| 4 | Read vs needs action | Partial | Tag and filter clear, but opening an item drops the bell while the task stays open |
| 5 | Manage alerts, save, dismiss | **Fail** | Only filters and "Mark all as read" exist |
| 6 | Closed application | Partial | Outcome is clear; "See similar roles" opens the generic Marketing page |

## Findings

**Confusing**
- (Med) "7 new" and "3 new" counts cannot be verified on the destination pages.
- (Med) Opening marks read immediately, so the bell no longer shows what is left to do.
- (Med) Destination pages read as stubs ("Prototype workspace", "Demo only").
- (Low) Persona switcher and Reset visible in the page body.
- (Low) "Task: No action required" plus "Notification: Read" is wordy.
- (Low) Closed-application text does not say whether the role was filled or withdrawn.

**Missing**
- (High) No alert management: no saved-search settings, frequency, mute or unsubscribe.
- (High) No save, follow or dismiss for a role in the feed; match notifications do not list the roles.
- (Med) No per-notification mark read/unread or delete.
- (Med) No explanation of why roles match, or way to edit the skills.
- (Low) No outcome page or next steps for a closed application.

**Bugs**
- (High) Match and saved-search links go to generic pages, so counts mismatch destinations (313 listed against "7 new").
- (Low) With a filter applied, "Mark all as read" also marks hidden items read, and the page does not say how many it affects.

## Agent's top recommendations
1. Match and saved-search notifications open a pre-filtered list of exactly the new roles, each labelled "New".
2. Alert management plus save/follow/dismiss in the feed.
3. Keep "unread" and "needs action" separate; show closed-application outcomes with a link to the application.

Back to [consolidated findings](consolidated.md).
