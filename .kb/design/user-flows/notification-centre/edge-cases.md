# Jobseeker stumbling blocks (edge cases)

Where the notification centre is likely to fail a jobseeker, grouped by cause. Each group lists the failure and the design response; the principle behind most responses is in [product.md](../../product.md) (D13). Requirements that follow from these are in the [component spec](../../components/notification-centre.md#resilience-requirements).

## 1. The thing the notification points to has changed or disappeared

| Failure | Response |
| :-- | :-- |
| Job deleted, closed or unpublished: link 404s or shows "job not found"; candidate can't tell if the application is alive | Fallback page: "This posting was closed on {date}. Your application status: {status}" |
| Posting edited after applying (title, location, salary, remote status) | Show the **snapshot** taken at application time, with "Posting has changed since you applied" |
| Job reposted under a new ID triggers a "new match" for a role already applied to | Match de-duplication against the candidate's applications (by requisition, not ID) |
| Named recruiter or hiring manager has left | Fall back to the team or a generic contact, never a dead name |
| Interview rescheduled or cancelled; old notification shows the old time | Superseded notifications are updated or marked "Replaced", showing the current time |

## 2. Status confusion

| Failure | Response |
| :-- | :-- |
| Vague labels ("In review", "Under consideration") unchanged for weeks | Plain-language statuses with "what happens next" and an expected timeframe |
| Status goes backwards or jumps due to internal ATS moves ("Interviewing" back to "Applied") | Candidate-facing status is separate from internal stages and never regresses without an explanation |
| No notification on rejection ("ghosting by UI"): the job just disappears | Every terminal outcome produces a notification |
| Several similar roles ("Software Engineer II" ×3) are indistinguishable | Each item carries requisition ID, location and team |
| Application moved to a different role with no explanation | Explicit "moved" notification stating from, to and why |

## 3. Identity and account problems

| Failure | Response |
| :-- | :-- |
| Applied as guest or with another email: history missing | Claim flow: link past applications by verified email |
| Duplicate accounts (LinkedIn apply and email) split notifications | Detect and offer to merge |
| Session expired: deep link lands on login and the destination is lost | Deep links survive login (return-to destination) |
| Agency submissions or referrals made on the candidate's behalf never appear | Show them once the candidate is matched to the application |
| Changed email or name: old notifications tied to old identity | Notifications follow the person, not the address |

## 4. Actions they can't complete

| Failure | Response |
| :-- | :-- |
| Link expired, or task already completed or withdrawn | Show the task's current state, not an error |
| Third-party assessment or scheduler has its own status, so the centre says "Pending" after completion | Status syncs from the external tool; "Received" confirmation on return |
| "Action required" with no deadline, or deadline in the wrong time zone | Every action carries a deadline in the viewer's time zone |
| No way to withdraw, reply or ask a question from the notification | Secondary actions (withdraw, contact recruiter) available on the item |

## 5. Noise and trust

| Failure | Response |
| :-- | :-- |
| Job-alert spam buries an interview invite among 40 "jobs you might like" | Separate application updates from alerts; urgent items rank above digests |
| Read/unread not synced across email, SMS and in-app | One read state across channels |
| Messages feel automated or look like phishing (links on another domain) | Links stay on the official domain; the message names the application |
| Notifications pile up with no archive, filter or grouping by application | Group by application; archive and filter |
| Turning off job alerts also turns off application updates | Preferences are separate per category; application updates cannot be silenced by switching alerts off |

## 6. Timing and lifecycle

| Failure | Response |
| :-- | :-- |
| Old notifications point to applications purged under retention or GDPR | Show "This application was deleted" and remove personal data from the item |
| Requisition on hold or frozen: nothing will happen and the candidate isn't told | "On hold" status notification with an honest expectation |
| Rejected for one role while an interview notification for a related role is pending | Show related-application context to avoid mixed signals |
| Offer rescinded or role filled internally after "moving forward" | Explicit notification with explanation; never silent removal |
| Internal candidates, rehires and former employees behave differently | Route to the right flow with context ("Your manager will be notified at the interview stage") |

## 7. Accessibility and context

| Failure | Response |
| :-- | :-- |
| Mobile deep links open in the browser instead of the app, or the reverse | Link handling decided per platform; test on mobile |
| Not localised; times shown in the server's time zone | Localise and show in the viewer's time zone |
| Screen-reader users can't tell what's unread or needs action | Semantic list, announced counts, text labels rather than colour or icons alone |
| Several brands or subsidiaries: unrecognised sender | Name the brand and employer on every item |

Back to [overview](overview.md).
