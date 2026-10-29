# Findings: Agent A, returning applicant

Run: 2026-10-29, desktop plus one 390px pass, against the published demo (build `cd7443df`). Agent was an AI role-playing the persona from the [validation plan](../validation.md); not a real user.

| # | Task | Result | Evidence |
| :-- | :-- | :-- | :-- |
| 1 | Find notifications | Pass | Bell labelled "Notifications, 4 unread" links to the centre |
| 2 | Unread count and priorities | Partial | "6 shown · 4 unread · 1 need action". Most important item ("moved to interview") is second, below the job matches; list is sorted by time, not importance |
| 3 | Open one, reach linked page | Partial | Page shows only "Stage: Interview" and "Task: No action required": no next step, date, contact or timeline |
| 4 | Read vs needs action | Pass | "Unread/Read" and "Needs action" shown in text; "Mark all as read" left "1 need action" |
| 5 | All notifications for one application | Partial | "Applications" filter returns four items across different jobs; no per-application grouping |
| 6 | Confusing, missing, visible | Partial | Bell consistent across pages checked |

## Findings

**Confusing**
- (Med) Interview notification says the team "would like to schedule a first call", but the linked page says "No action required" and the "Needs action" filter omits it.
- (Low) Opening a link marks the item read and drops the bell with no choice.
- (Low) Demo-only persona switcher shows other roles' names to a jobseeker.
- (Low) Titles are links on one item and not others, depending on whether it has a real destination.

**Missing**
- (High) No application status page: current stage, whether it is moving, what happens next.
- (Med) No grouping or filter by application; no search.
- (Low) Dates carry no year and no "time since last update".

**Bugs**
- (Low) Filter buttons give no verified visible selected state.
- Agent also reported 404s on `/careers/jobs/` and `/careers/culture/`. **Not reproducible as a defect:** nothing on the page links to those URLs; the agent guessed them. Discarded.

## Agent's top recommendations
1. Make the application page a real status view with a next-step action; make the interview notification actionable ("Schedule your call").
2. Pin "Needs action" items first; group by job.
3. Don't mark read on open; remove the switcher from the jobseeker view.

Back to [consolidated findings](consolidated.md).
