# Assumption register: people, entry points and notification context

**Maintainer**: S. **Evidence and review owner**: L. **Created**: 2026-10-29.
Related: [product](product.md), [entry-context seeds](user-flows/notification-centre/entry-contexts.md),
[S brief](../../docs/handoffs/S.md), [L brief](../../docs/handoffs/L.md).

## What is established

The owner explicitly requested coverage of jobseekers arriving from email,
LinkedIn and direct job links, and a record connecting notifications to the
message and place it points to. S owns personas and journeys; L owns evaluation,
specification/evidence tracking and the remaining workflow foundations.

These are agreed workshop inputs, not evidence about how real applicants behave.
The claims below are working hypotheses. No entry frequency, account status,
channel preference or successful journey is claimed as researched or tested.

## Working hypotheses

All rows start **proposed** on 2026-10-29. S owns the assumption wording; L records
linked observations and proposes status changes through the handoff.

| ID | Entry/context | Working assumption to examine | Implication or question for S |
|---|---|---|---|
| A-001 | Careers home, organic search or browsing | A first-time visitor may have no account, application or personal notifications | What public content do they see, and when is a personal centre relevant? |
| A-002 | Application-update email | A returning applicant expects the named application and its current stage, not an unrelated jobs list | Choose the email CTA target: application detail, selected notification or another explicit destination; preserve the subject throughout |
| A-003 | Job-match or saved-search email | The person wants the advertised job or matching results; they may never have applied | Distinguish recommendation content from application-progress messages; preserve job/search context |
| A-004 | LinkedIn post or advertisement linking to a job | The visitor expects the specific advertised vacancy; their identity/application history is unknown | Define the job landing and route toward applying; decide whether/when an existing notification is relevant |
| A-005 | Direct, bookmarked or shared job URL | The visitor expects the same vacancy, including when it has closed or changed | Define a useful closed/unavailable state and a recovery route; avoid silently substituting another job |
| A-006 | Return directly to the notification centre | An established identity expects their own messages and relevant tasks | Define the starting identity, unread state, entitlement and return destination |
| A-007 | Email opened in a new browser/device or expired session | The destination may lack the identity/context present when the email was sent | Define the simulated identity boundary and continuation after it; an email click alone must not be treated as verified identity |
| A-008 | Same hiring event in email and in-app | The message and notification should agree on subject/event; a later destination may show a newer state | Decide how to explain updates, deduplicate attention and distinguish channel read state from completed work |
| A-009 | Old/forwarded email or stale notification | The underlying application, task or vacancy may no longer be active or visible to this person | Preserve useful context without revealing another person's data; provide a clear recovery path |
| A-010 | Staff email or direct hiring-task link | Hiring managers and recruiters need the assigned candidate/vacancy, not all records for their role | Define assignment, identity and the exact task destination for each staff persona |
| A-011 | Switching between entry surfaces | A visitor should recognize the same job/application from email/post through landing, centre and action | Specify consistent titles, IDs, stage, CTA meaning and navigation back; do not require a centre detour by default |

An arrival is not automatically a notification event. S must identify whether
there is a real event/message worth notifying about; opening a LinkedIn link
does not by itself establish one. A notification may reference a communication
or point to the same subject without reproducing the original email.

## Trace each scenario

Use: **entry channel -> source communication/post (if any) -> job/application/task
and event -> related notification (if any) -> CTA destination -> recovery/return**.

For each scenario record the assumption IDs, persona and lifecycle stage,
known/unknown identity, source artifact text, subject/event IDs, landing target,
related notification, CTA label/target, expected outcome and error states.
Separate entry source from the product/service that emits an event.
Use synthetic artifacts; modelling an email does not require sending email or
connecting real accounts. Exact prototype routes are assigned by S and handed to L.

## Questions that remain open

- Which email types lead directly to a job/application and which lead to a selected centre item?
- Is the first-time job visitor expected to sign in at all? At what step is identity necessary?
- Does opening an email affect in-app unread state? Does resolving a task affect it?
- How should a forwarded link, stale stage or closed vacancy be explained?
- Which entry contexts belong in the first workshop run, and which remain design hypotheses?

## Updating the register

Retain stable A-IDs. For a changed row, append a dated note with status
(`proposed`, `supported`, `contradicted` or `superseded`), source/evidence type,
finding/run link, rationale, decision owner and related product decision.
Agent evidence is labelled simulated review; a product choice is labelled a
choice. Neither automatically establishes observed human behaviour. L keeps
evidence in the spec's `reviews/`; S maintains this register and product decisions.

| Date | Assumption | Status | Evidence/type | Decision/reason | Owner |
|---|---|---|---|---|---|
| 2026-10-29 | A-001 through A-011 | proposed | Owner-supplied entry scenarios plus explicit design hypotheses; no walkthrough evidence | Seed S's persona/journey work before evaluating the centre | S; evidence links maintained by L |
| 2026-10-29 | A-002, A-007 | proposed | Simulated email-entry review [RUN-003](https://github.com/Sophie-32/canonical.com/blob/70dfb9c8ae8fdb3d1995dab115f086a88bd176d5/specs/001-notification-centre/reviews/RUN-003.md): one reviewer followed the seeded signed-out email through simulated sign-in to the named draft | J-EMAIL-DRAFT chooses the named-draft destination; D17 concerns completion. The task prescribed the session and intent, so it does not establish real applicant expectations or identity behavior | S |
| 2026-10-29 | A-008, A-011 | proposed | Simulated reviews [RUN-001](https://github.com/Sophie-32/canonical.com/blob/70dfb9c8ae8fdb3d1995dab115f086a88bd176d5/specs/001-notification-centre/reviews/RUN-001.md), [RUN-002](https://github.com/Sophie-32/canonical.com/blob/70dfb9c8ae8fdb3d1995dab115f086a88bd176d5/specs/001-notification-centre/reviews/RUN-002.md) and [RUN-003](https://github.com/Sophie-32/canonical.com/blob/70dfb9c8ae8fdb3d1995dab115f086a88bd176d5/specs/001-notification-centre/reviews/RUN-003.md): F-001 challenged completion clarity; the retest and one email run showed consistent draft context, while F-005 exposed unclear confirmation | D17 addresses completion; D18 specifies a clearer confirmation that still needs L's retest. These narrow simulated results do not settle channel synchronization or other entry journeys | S |
