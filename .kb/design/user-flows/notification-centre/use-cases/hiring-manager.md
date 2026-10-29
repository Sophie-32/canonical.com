# Use case: hiring manager, "A candidate needs your review"

Persona: Priya Nair. Role: `hiring-manager`. Scope: vacancies she owns (Ubuntu Foundations).

## Notifications

| Notification | Severity | Needs action | Primary action |
| :-- | :-- | :-- | :-- |
| A candidate needs your review | HIGH | Yes | Review candidate |
| 3 candidates are waiting on one vacancy | HIGH | Yes | Open vacancy |
| Pick interview slots for {candidate} | MEDIUM | Yes | Pick interview slots |
| Vacancy closing in 5 days | MEDIUM | Yes | Open vacancy |
| Review submitted by a panel colleague | INFO | No | View review |

## Happy path

1. Bell shows count; Priya filters to **Needs action**.
2. Opens "A candidate needs your review": read, action prominent.
3. Follows **Review candidate**; submits a review (prototype: **Mark task done**).
4. Returns: notification shows **Done**; the unread-and-needs-action count drops.

## Edge cases

- A panel colleague submits the review first: Priya sees "Done by {name}", action becomes "View review".
- Priya must not see applicant notifications for vacancies she does not own.

Back to [overview](../overview.md).
