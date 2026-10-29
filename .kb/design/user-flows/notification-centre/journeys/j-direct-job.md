# J-DIRECT-JOB: return to a job from a direct link

**Owner**: S. **Status**: proposed journey; not implemented; not ready for review.
Related: [entry-context seeds](../entry-contexts.md), [assumptions](../../../assumptions.md),
[product decisions](../../../product.md).

## Scope and persona

The primary scenario is a returning visitor reopening a bookmarked link to a
specific vacancy to see whether it is still open. The proposed fixture has no
account or application and starts signed out. Separate variants are a first-time
visitor following a shared link, and Alex reopening the link with or without a
simulated session; no identity is inferred from the link.

| Reference | Proposed subject or relationship |
| :-- | :-- |
| J-DIRECT-JOB | Public job link to a specific vacancy, including a later closed-job visit |
| DIRECT-JOB-01 | A synthetic shared or bookmarked link naming JOB-01; its actual URL is not yet assigned |
| JOB-01 | Senior Software Engineer, Ubuntu Foundations |
| APP-01 | Alex's application for JOB-01, relevant only in Alex's simulated session |
| `n01`, `n05` | Alex's existing application-progressed and application-received notifications; neither is created by opening the job link |

The current fixtures name the JOB-01 vacancy in `n01` and `n05`; staff-only
`n14` says it closes on 3 Nov. That staff fixture is not itself a public source.
There is no dedicated JOB-01 page in this slice. No source artifact or destination
URL below is a working review entry yet.

## Proposed journey

1. The person opens DIRECT-JOB-01. The link identifies JOB-01, not the person.
2. The public landing identifies the same vacancy and gives enough role context
   to decide whether to apply. It does not show Alex's application or messages.
3. If the vacancy is open, the person can choose to apply. The identity boundary
   and continuation into an application need a separate explicit design; do not
   treat the link itself as sign-in.
4. If the vacancy is closed or unavailable, preserve the vacancy's identity,
   explain its state and offer a route to browse other roles. Do not silently
   substitute another job or promise that the original can still be applied to.
5. In a separately seeded Alex session, the same link still identifies JOB-01.
   Closing the vacancy does not itself close APP-01: an active application must
   retain its current status and a scoped route to that application, consistent
   with product decision D13. Show application-specific status only in an
   authenticated, entitled view, not on the public landing. The design must also
   address an attempt to apply again when APP-01 already exists. Existing
   notifications refer to application events, not to this link visit.
6. If Alex opens the link while signed out, show only the public state. A generic
   sign-in entry may lead to Alex's application after simulated identity is
   established; the signed-out page must not disclose whether APP-01 exists.

For the open-job path, completion means the visitor can understand the vacancy
and choose whether to start an application; the precise apply continuation is
not yet designed. For the closed-job path, completion means understanding the
closure and being able to return to browsing. For Alex, it also means being
able to return to the existing application or centre without losing its context.

## Assumptions and open choices

| ID | Question for this slice |
| :-- | :-- |
| A-001 | What public information and actions are useful before sign-in? |
| A-004, A-005 | The seed gives the social post and direct link the same destination contract; how should the shared landing represent the open and closed states? |
| A-009 | What context can remain visible when a job is unavailable without exposing application data? |
| A-011 | How should the public job and an authenticated application be distinguished while keeping the job recognizable? |

These are design questions, not observed user behaviour or new adopted product
decisions. The exact job URL, source artifact, role content, apply/sign-in
continuation, duplicate-application handling, closed-state fixture, and return
routes remain to be decided. A LinkedIn post is outside this slice, but its
eventual job destination retains the shared contract in the seed.
Edited, reposted or moved vacancies are also outside this slice; A-005's changed
vacancy cases remain open for a later journey. Whether vacancy closure generates
a separate applicant notification also remains open; the existing flow notes
propose retaining a notification for a closed vacancy.

The current notification script defaults to Alex and does not use `signedIn`
when showing the bell count or checking access to application details; its reset
also preserves the selected persona. A genuinely anonymous simulated state and
an identity boundary for application destinations are therefore prerequisites,
not behaviours the existing reset demonstrates.

## Before handoff

After the relevant product/spec checkpoints, implement and map the source link,
open and closed states, identity/session fixtures and recovery routes. Give L the
exact commit and preview URL, initial session, reset instructions, route and
notification mapping, selected assumptions and known limits. Until then this is
a design input, not a runnable handoff or a review result.

## Draft review

On 2026-10-29, Claude Opus 5.5 (Copilot) performed an adversarial source and
journey review, not a browser walkthrough. The reviewed draft was uncommitted on
base `63012289`, with SHA-256
`902093583099ee9da0478fce70812001a8265e6af3bd89e9d2bc6fb9e911d0ac`.
The subsequent revision clarifies the anonymous-state prerequisite, active
applications after vacancy closure, returning-visitor scope, shared destination
contract and completion outcomes. These remain proposals and known limits, not
findings from a user test or an accepted implementation plan.

A follow-up source review by Claude Opus 5.5 (Copilot) checked the revised,
uncommitted draft on base `63012289` (SHA-256
`33bf8679e494b0be991afa46b568f04f81c76f62b883f374279eeeb2fa235aec`).
It identified the signed-out returning-applicant path, exact starting fixture,
changed-vacancy scope and staff-only closing-date source as needing clarity.

A third source-only review by Claude Opus 5.5 (Copilot) checked the uncommitted
draft on base `63012289` (SHA-256
`44694356137d10777032ceb8333315ba0a5bb97672ea1e6a3fbedd94b5b10637`).
It identified the application destination's missing simulated identity boundary,
the relationship to D13 and an incorrect A-008 mapping. The subsequent revision
addresses those points; it has not itself been reviewed or browser-tested.