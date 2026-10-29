# Component: notification centre

Higher-order component: nav bell + notification page. Built from Vanilla notification, list and segmented-control patterns ([design notes](../design.md)).

## Data model (DE100 adapted to careers)

Fields kept from the schema; those marked *added* are careers extensions.

```json
{
  "id": "n-1042",
  "product/service": "careers",
  "event_type": "custom",
  "careers_event": "application_progressed",
  "severity": "INFO",
  "impact": 1,
  "title": "Your application moved to interview",
  "body": "Senior Software Engineer, Ubuntu Foundations: ...",
  "context": { "application_id": "a-77", "vacancy": "Senior Software Engineer, Ubuntu Foundations" },
  "actionable": true,
  "action": { "label": "View application", "url": "applications/a-77/index.html" },
  "remediation_options": [{ "label": "Mute this vacancy", "type": "other" }],
  "audience": { "roles": ["jobseeker"], "scope": { "application_id": "a-77" } },
  "delivery": "IMMEDIATE",
  "channels": ["in_app"],
  "delivery_log": [
    { "channel": "in_app", "recipient_id": "alex", "status": "delivered", "timestamp": "2026-10-29T08:03:00Z" }
  ]
}
```

*added:* `careers_event` (sub-type under `custom`), `audience.scope` (which application or vacancy the role is entitled to; the schema's role-only audience is not enough for "see only your own"). Both are open questions in [product.md](../product.md).

## Events

| careers_event | Audience | Severity | Impact | Primary action | Resolved when |
| :-- | :-- | :-- | :-- | :-- | :-- |
| `application_received` | jobseeker | INFO | 1 | View application | n/a (not actionable) |
| `application_progressed` | jobseeker | INFO | 1 | View application | n/a |
| `application_closed` | jobseeker | INFO | 1 | See similar roles | n/a |
| `application_draft_expiring` | jobseeker | MEDIUM | 1 | Complete application | Application submitted |
| `vacancy_match` | jobseeker | INFO | 2 | View matching roles | n/a |
| `saved_search_match` | jobseeker | INFO | 2 | Browse roles | n/a |
| `candidate_review_needed` | hiring-manager | HIGH | 1 | Review candidate | Review submitted (anyone on the hiring panel) |
| `interview_scheduling_needed` | hiring-manager | MEDIUM | 1 | Pick interview slots | Slots chosen |
| `interview_feedback_overdue` | recruiter | HIGH | 1 or 2 | Open hiring task | Feedback logged |
| `candidate_stalled` | recruiter | MEDIUM | 2 | Open hiring task | Candidate moved or closed |
| `vacancy_closing` | recruiter, hiring-manager | MEDIUM | 2 | Open vacancy | Vacancy closed or extended |
| `routing_problem` | notifications-admin | MEDIUM | 3 | Review routing | Role assigned (prototype: not shown) |

## States

Read and task state are independent. Four combinations exist for actionable notifications:

| | Not done | Done |
| :-- | :-- | :-- |
| **Unread** | Bold title, green bar, counts toward bell | Rare (resolved by someone else before reading): shown as Done, counts as read for the bell |
| **Read** | Normal weight, action still prominent | Greyed, "Done by {name}" label, action replaced by "View" |

- Opening a notification or its action marks it **read**. Clicking elsewhere on the row does not.
- Completing the linked task (simulated by a "Mark task done" control in the prototype) sets `actionable=false` and writes a `resolved` log entry for **every** recipient in that role.
- Non-actionable notifications (`actionable=false` from creation) have only a read state.
- Bell count = unread notifications for the active persona.

## Page behaviour

1. Header: persona name and role; demo-only persona switcher.
2. Filters: All, Unread, Needs action, then persona-specific event groups.
3. List sorted newest first; "Needs action" items always show a primary action link.
4. "Mark all as read" affects read state only, never task state.
5. Empty state per filter.
6. Visibility: a persona only ever receives notifications whose `audience.roles` include their role and whose `audience.scope` matches their entitlements.

## Resilience requirements

Derived from the [jobseeker stumbling blocks](../user-flows/notification-centre/edge-cases.md) and decision D13. Not all are built in the prototype.

| Requirement | Detail |
| :-- | :-- |
| Job snapshot | Each application notification carries `context.snapshot`: `title`, `location`, `requisition_id`, `team`, `applied_at`. Shown even if the posting is edited, closed or deleted |
| Current status always shown | Notification detail shows the application's current status separate from the event that triggered it; statuses are candidate-facing and never regress without an explanation |
| Dead-end fallback | If the target is gone, show "This posting was closed on {date}. Your application status: {status}" instead of a 404 |
| Superseded notifications | A rescheduled or cancelled event updates the old item or marks it "Replaced" |
| De-duplication | Matches are checked against the person's applications by requisition, not job ID |
| Grouping and archive | Group by application; archive and filter; separate application cycles |
| Deadlines | Any `actionable` item has a `due_at`, shown in the viewer's time zone |
| Confirmation | Completing a task shows an explicit "received" state; external tool status syncs back |
| Secondary actions | Withdraw, contact recruiter, mute, via `remediation_options`; links to privacy and data controls |
| Preferences | Application updates and job alerts are separate categories (D15) |
| Deep links | Survive login (return-to destination); work on mobile |
| Identity | Notifications follow the person across emails and accounts; guest applications can be claimed |
| Channel sync | One read state across in-app, email and SMS |
| Terminal outcomes | Rejection, on-hold, role moved, offer rescinded each generate a notification |
| Privacy | After deletion, items show "This application was deleted" with personal data removed |

## Accessibility

List is a `ul`; unread is conveyed in text ("Unread") as well as colour; filters are a tablist; the bell has an accessible name that includes the unread count.
