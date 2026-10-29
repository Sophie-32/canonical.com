# Consolidated findings: round 1 (current build)

Three AI agents posing as jobseekers tested the published demo on 2026-10-29. Individual reports: [A](agent-a-returning-applicant.md), [B](agent-b-browsing-seeker.md), [C](agent-c-deadline-applicant.md). Agents are a cheap first pass and tend to over-report stubs as problems; this is not a substitute for real users. All three ran as the default jobseeker and none used the persona switcher.

## Success criteria from the [validation plan](../validation.md)

| Criterion | Target | Result |
| :-- | :-- | :-- |
| Find the bell and open the centre | 3 of 3 | **3 of 3** |
| State unread vs needs-action correctly | 3 of 3 | **3 of 3** |
| Reach the linked page from a notification | 3 of 3 | **3 of 3 reached a page**, but B found match links land on generic pages |
| See no hiring-side notifications as a jobseeker | 3 of 3 | **Partly**: no hiring notifications shown, but the persona switcher exposes other roles (all 3 flagged) |
| No serious confusion on read vs done | 0 serious | **Met on severity** (none High) but all 3 flagged "opening marks read" as confusing (Med) |

## Themes, ordered by how many agents hit them and severity

| # | Finding | Agents | Severity | Proposed change |
| :-- | :-- | :-- | :-- | :-- |
| F1 | Destination pages are stubs: no status, next step, dates or confirmation | A, B, C | High | Build a real application status page (stage, next step, what happens next) using the job snapshot (D13) |
| F2 | Opening a notification marks it read, so the bell drops while work remains | A, B, C | Med | Decide: keep "read on open" but make the bell show **needs-action** count, or mark read only when the item is viewed in the list. See D16 below |
| F3 | Persona switcher and Reset demo state visible to the jobseeker | A, B, C | Med | Move out of the page body into a demo-only control (e.g. `?demo=1` bar) so it does not read as product |
| F4 | Deadline has no time or time zone | C | High | `due_at` shown as full date and time with zone in row and detail |
| F5 | No confirmation after completing a task; row text goes stale ("closes in 3 days") | C | High | Explicit "received" state; row title and body change to the done state |
| F6 | Match and saved-search links go to generic pages; "7 new" cannot be verified | B | High | Link to a filtered list of exactly the new roles with a "New" label |
| F7 | No alert management; no save or dismiss | B | High | Add a preferences link (separate from application updates, D15) and per-item dismiss |
| F8 | Interview notification says "schedule a call" but is not actionable and not under "Needs action" | A | Med | Make `application_progressed` to interview actionable with a "Schedule your call" action (data bug) |
| F9 | No grouping or filter by application; list sorted by time, not importance | A | Med | Group by application; pin needs-action items first |
| F10 | "Mark all as read" while filtered also marks hidden items | B | Low | Apply to visible items, or state the count |
| F11 | Accessibility: no live region, headings skip H1 to H3, duplicate links per row, bell count is colour badge | C | Low-Med | Add `role=status`, H2 for sections, single link per row, visible text count |
| F12 | Dates lack a year; no "time since last update" | A | Low | Add relative time and year where needed |

## Not accepted

- Agent A's 404s on `/careers/jobs/` and `/careers/culture/`: nothing links to those URLs, so it is not a prototype defect.
- Cookie dialog blocking clicks on mobile: part of the copied live site.
- The stub notice "Demo only: in the real product…": intentional (D11). The agents' point stands, though: the destination must be a believable page to test properly (F1).

## Coverage gap

These tests exercised [journeys](../use-cases/jobseeker-journeys.md) 1, 3, 4, 7, 8 partly and the prompted, action-required path (2, 5) only via the draft item. Journeys 6, 9, 10, 12 remain untested.

Back to [validation plan](../validation.md).
