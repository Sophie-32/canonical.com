# User flow: careers notification centre

Existing entry: global nav bell on careers pages. S's workshop journey scope
also covers email, LinkedIn and direct job-link arrivals under the
[assumption register](../../assumptions.md) and [entry-context seeds](entry-contexts.md).
These are scenario inputs; they do not claim those entry surfaces are implemented.
Start with the source message/job and expected landing, then decide how the
related notification and centre fit. L consumes the mapped journey for evaluation.

## Journey (all personas)

1. See unread count on the bell.
2. Open the notification centre.
3. Scan the list, filter to "Needs action".
4. Open a notification: it becomes **read**; follow its primary action to the workspace page.
5. Complete the task; return: the notification now shows **done** (and for teammates in the same role).

## Use cases

- [Jobseeker](use-cases/jobseeker.md): "Your application progressed" → view application
- [Hiring manager](use-cases/hiring-manager.md): "A candidate needs your review" → review candidate
- [Recruiter](use-cases/recruiter.md): "Interview feedback is overdue" → open hiring task

## Edge cases

The full list of jobseeker failure modes is in [edge-cases.md](edge-cases.md), and the 12 test journeys are in [jobseeker-journeys](use-cases/jobseeker-journeys.md). Prototype-level cases:

| Case | Behaviour |
| :-- | :-- |
| Task resolved by a colleague | Greyed with "Done by {name}"; action becomes "View" |
| Notification for a closed vacancy | Stays in feed, action label changes to "View vacancy (closed)" |
| No notifications in a filter | Empty state with a link to the other filters |
| Persona with nothing unread | Bell shows no count |
| Audience resolves to nobody | Not visible to personas; would surface to `notifications-admin` as `routing_problem` (not prototyped) |

## Steps

Step-by-step implementation notes go in [steps/](steps/) as the prototype is built.

Related: [Product](../../product.md) · [Component spec](../../components/notification-centre.md) · [Validation plan](validation.md)
