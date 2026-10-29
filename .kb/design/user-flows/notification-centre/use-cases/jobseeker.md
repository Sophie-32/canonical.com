# Use case: jobseeker, "Your application progressed"

Persona: Alex Morgan. Role: `jobseeker`. Scope: own applications and saved searches only.

## Notifications

| Notification | Severity | Needs action | Primary action |
| :-- | :-- | :-- | :-- |
| Your application moved to interview | INFO | No | View application |
| Application received | INFO | No | View application |
| Complete your application (draft closes in 3 days) | MEDIUM | Yes | Complete application |
| 7 new job postings match your skills | INFO | No | View matching roles |
| 3 new roles for saved search | INFO | No | Browse roles |
| Application closed: Marketing Manager | INFO | No | See similar roles |

## Happy path

1. Bell shows 4. Alex opens the centre.
2. Opens "Your application moved to interview": marked read.
3. Follows **View application** to the application page (shows stage and what to expect).
4. Returns; the notification is read, no task state (not actionable).

## Edge cases

- Draft expires while unread: notification stays, action changes to "Start again".
- Alex never sees hiring-side notifications (candidate review, feedback), including counts.

See also the [12 jobseeker journeys](jobseeker-journeys.md) and [stumbling blocks](../edge-cases.md).

Back to [overview](../overview.md).
