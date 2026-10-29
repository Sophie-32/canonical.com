# Jobseeker journeys (12)

Fictional jobseekers used to test the notification centre. Names are placeholders; the journey-1 jobseeker is "Peter" so it does not clash with the hiring-manager persona Priya in [hiring-manager.md](hiring-manager.md). Failure modes behind each journey are in [edge-cases](../edge-cases.md).

## Coverage grid

Two axes: **prompted** (email or push brought them in) vs **self-initiated**; **informational** vs **action-required**. The costliest failures are prompted, action-required visits (journeys 2, 5, 6) because a broken link or stale status costs the candidate something real.

| | Informational | Action-required |
| :-- | :-- | :-- |
| **Prompted** | 4 rejected candidate, 3 multi-applicant, 7 digest | **2, 5, 6** |
| **Self-initiated** | 1 anxious waiter, 8 dead-end clicker, 9 returning, 10 internal, 11 accessibility | 12 privacy-conscious |

## Journeys

| # | Who | Trigger and path | Needs |
| :-- | :-- | :-- | :-- |
| 1 | **The anxious waiter**: Peter applied to a PM role two weeks ago, no news | Logs in unprompted, scans the centre, sees only "Application received" from 14 days ago, clicks into the application | Clear current status and a sense the process is moving; an empty or stale feed reads as ghosting |
| 2 | **The interview scheduler**: Marcus | Email "Action required: schedule your interview"; taps on phone at lunch, bounced to login, lands on home instead of the task; finds the item in the centre and picks a slot in an embedded scheduler | Deep links that survive login; mobile-friendly flow; booking confirmation and calendar invite |
| 3 | **The multi-applicant**: Dana applied to four roles (two engineering, another city, one by referral) | Gets "Your application has been updated" and can't tell which | Grouping by application; title, location and req ID in every item |
| 4 | **The rejected candidate**: Leo | Receives "Thank you for your interest"; looks for feedback, reapply rules and similar roles; adjusts alerts | Respectful, final-feeling message; "you can reapply after X"; path to related openings, not a jarring "jobs you might like!" |
| 5 | **The task completer**: Aisha | Asked for a coding assessment and work-authorisation documents; finishes the assessment on a third-party site, notification still says "Pending"; uploads documents, unsure they arrived | Status synced with external tools; checklist of outstanding tasks with deadlines; explicit "received" confirmation |
| 6 | **The offer recipient**: James | Offer ready; reviews, asks recruiter about start date, returns 3 days later to sign | Visible deadline; contact the recruiter from the notification; secure document viewing; reminder before expiry |
| 7 | **The passive browser with alerts**: Sofia, alert for "UX Designer, remote" | Weekly digest; saves two jobs; turns off one overly broad alert | Alert preferences separate from application updates; save and dismiss in the feed |
| 8 | **The dead-end clicker**: Raj | Clicks a two-month-old notification; posting closed, hits "Job not found" | Snapshot of what he applied to plus final status, not a 404 |
| 9 | **The returning former candidate**: Elena, rejected last year, applying again | Logs in to a feed mixing old-cycle and new notifications | Archive or separate by application cycle so current activity is obvious |
| 10 | **The internal or rehire candidate**: Tom | Unsure whether to use the external site; notifications ignore his internal status | Routing between internal and external flows; context such as "Your manager will be notified at the interview stage" |
| 11 | **The accessibility-dependent user**: Grace, screen reader | Needs unread count, what needs action and by when | Semantic structure; announced counts; action items labelled in text, not just colour or icon |
| 12 | **The privacy-conscious user**: Wei | Wants to withdraw and delete data; looks for a withdraw action then data deletion | Self-serve withdraw; confirmation it worked; link to privacy and data controls |

Back to [overview](../overview.md) · [jobseeker use case](jobseeker.md).
