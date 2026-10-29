# Use case: recruiter, "Interview feedback is overdue"

Persona: Sam Okafor. Role: `recruiter`. Scope: all vacancies in his portfolio.

## Notifications

| Notification | Severity | Needs action | Primary action |
| :-- | :-- | :-- | :-- |
| Interview feedback is overdue | HIGH | Yes | Open hiring task |
| Candidate stalled in stage for 10 days | MEDIUM | Yes | Open hiring task |
| Vacancy closing in 5 days | MEDIUM | Yes | Open vacancy |
| Feedback logged by a colleague | INFO | No | View task |

## Happy path

1. Sam opens the centre; the overdue-feedback notification is at the top.
2. Opens it: read. Follows **Open hiring task** and chases the interviewer.
3. Feedback is logged (prototype: **Mark task done**).
4. All recruiters on the portfolio see the task as **Done** (shared `actionable`).

## Edge cases

- Two recruiters receive the same alert; one resolves it: the other's copy greys out without reload in the real product (prototype: on next render).
- Many overdue alerts for one team: roll up to a team-level notification (impact 3) rather than listing each (alert-storm rule in DE100).

Back to [overview](../overview.md).
