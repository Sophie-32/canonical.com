# Journey-review protocol and evidence index

**Status**: protocol in use; [RUN-001](RUN-001.md) recorded (simulated reviews).
Execution is workshop scope, not deferred work.
Related: [spec](../spec.md), [decisions](../decisions.md), [CP1](CP1-request.md).
Start with the [workshop ownership/handoff](../../../docs/workshop.md) and
[imported baseline](baseline.md).
S supplies the [assumptions](../../../.kb/design/assumptions.md) and
[entry-context mapping](../../../.kb/design/user-flows/notification-centre/entry-contexts.md);
L owns execution/evidence. Start with [L's brief](../../../docs/handoffs/L.md).
For immediate work concurrent with S, use [the runnable Round 0 packet](round-0.md).

## Review matrix

Run jobseeker, hiring-manager and recruiter journeys separately for Gemini,
Claude and GPT: nine model/persona combinations. Each model must exercise all personas;
do not confound one model with one role. Repeat critical journeys with representative
people and report that evidence separately.

The owner's Copilot harness launches the model reviewers. Record actual model
selection and browser capability from that harness; do not use this checkout's
standalone CLI inventory as an availability check. Model substitution must be
explicit, and unavailable combinations must be reported honestly.

## Neutral task prompts

Start each run at the selected journey's entry surface in its assigned fixture,
without hints about control locations or the intended route. The prompts below
are careers-entry examples. For an email/post journey, provide S's visible source
artifact and a task such as "Follow up on this update and find out what you need
to do next." For a direct job link, use the supplied job link and its stated goal.
Do not force a centre visit if the message promises a job/application destination.

- Jobseeker: "You applied for the software engineer role. Find out what changed
  in your application and what, if anything, you need to do next."
- Hiring manager: "You manage the assigned engineering vacancy. Find the latest
  request that needs your attention and go to the place where you can act."
- Recruiter: "You coordinate the assigned hiring pipeline. Find the outstanding
  feedback request and go to the place where you can follow it up."

## Procedure

1. Pin the tested commit/version and served URL; record viewport, fixture/reset
   version, J-/A-IDs, source artifact, intended subject, initial session,
   identity and actual model/tool versions. Map implemented IDs/routes from S's
   handoff; unimplemented entry scenarios are not completed reviews. Reset personal and shared
   state before each independent run. Use an isolated browser profile/context per
   simultaneous reviewer: the prototype stores state in `localStorage` and its
   reset control retains the selected persona.
2. Give the reviewer only its task and fixture identity. Keep it independent of
   earlier findings, source code, intended control locations and the acceptance
   checklist. A source audit is a separate review type.
3. Observe real interactions. Record route, visible label, action, expected
   outcome, observed outcome, screenshot/trace where available, and whether the
   task completed unaided. A reviewer may succeed without finding any issue.
4. Keep observed failures separate from self-reported confusion and speculation.
   Do not prompt an agent to invent stumbles. Record interventions or tool failures.
5. Reset and reproduce each candidate finding. Group duplicates but preserve
   each source run. Classify blocking (task impossible/data exposure), major
   (wrong destination/misleading state), or minor (recoverable friction).
6. Give every finding a disposition: accepted, duplicate, needs evidence,
   deferred or rejected, with reason and decision-maker. Create a separate
   Spec Kit package for an accepted distinct change in behaviour; the evaluation
   owner allocates its catalog number and the experience owner implements it. A small
   implementation defect can use a scoped bug record linked to this spec.
7. For accepted work, link original finding -> decision -> fix spec/bug ->
   implementation revision -> repeat of original task -> outcome. Retest affected
   personas and keep failures open. A new version starts a new run record.
8. Link supporting/contradicting evidence to the assumption and ask S to update
   its status. Retain the source message, expected destination and subject mapping
   so an email-to-page mismatch remains reproducible after the UI changes.

Record adopted product choices in [the product log](../../../.kb/design/product.md)
and link to them from findings; the package decision record owns process choices
and proposed changes, not a second authoritative product policy.

Use [the review template](templates/journey-review.md). Store durable run files
here as `RUN-<number>.md` and use stable finding IDs such as `F-001`; those names
are conventions, not evidence that a run has occurred.

## Findings index

| Finding | Run/persona/revision | Evidence | Severity | Disposition and reason | Decision | Fix spec/bug | Change | Retest |
|---|---|---|---|---|---|---|---|---|
| [F-001](RUN-001.md#f-001-complete-application-can-be-marked-done-while-the-draft-remains-unsubmitted) | RUN-001a/b/c, Alex, `4e067fa6` | 3/3 simulated runs; L reproduction with screenshots | Major | Accepted by S: false completion on a deadline task | [D17](../../../.kb/design/product.md) | [FIX-001](FIX-001-draft-submission.md) | `487831cf` (S, J-EMAIL-DRAFT) | [RUN-002](RUN-002.md): pass 3/3 |
| [F-002](RUN-001.md#f-002-gemini-reported-badge-1-and-action-required-label-not-reproduced) | RUN-001c | Not reproduced | n/a | Proposed reject: reviewer perception error | Pending S triage | n/a | n/a | n/a |
| [F-003](RUN-001.md#f-003-demo-only-footer-visible-on-the-jobseeker-destination) | RUN-001a/b/c | Observed | Minor | Proposed defer: prototype scaffolding; FIX-001 covers n02 | Pending S triage | Linked to FIX-001 | n/a | n/a |
| [F-004](RUN-001.md#f-004-501-on-cookie-preference-post) | RUN-001a | Console only | n/a | Proposed reject: static-server limitation | Pending S triage | n/a | n/a | n/a |
| [F-005](RUN-002.md#new-findings) | RUN-002a, RUN-003a/b, Alex, `487831cf` | 3 runs; L reproduction | Minor | Accepted by S: submitted item kept caution style and reminder time | [D18](../../../.kb/design/product.md) | Bug, S | `58ca6cd8` | [RUN-004](RUN-004.md): pass (L browser check + Claude 1/1) |
| [F-006](RUN-002.md#new-findings) | RUN-002c | Not reproduced | n/a | Proposed reject: reviewer perception error | Pending S triage | n/a | n/a | n/a |
| [F-007](RUN-003.md#outcome) | RUN-003c | Not reproduced | n/a | Proposed reject: reviewer perception error (third Gemini Flash instance; weight its centre-page reports accordingly) | Pending S triage | n/a | n/a | n/a |
| [B-001](RUN-003.md#source-inspection-labelled-separately-not-a-walkthrough-observation) | Source inspection, `487831cf` | Code | Security | Accepted by S: unvalidated `next` redirect | S, AGENT-INBOX | Bug, S | `58ca6cd8` | [RUN-004](RUN-004.md#b-001-coordinator-browser-check-observed): pass, 4 hostile values fall back |
| [F-008](RUN-004.md#run-004a-run-003s-email-task-simulated-review) | RUN-004a, `58ca6cd8` | 1 run | Minor | Needs evidence: unrelated unread interview item above the confirmation | Pending S | n/a | n/a | n/a |

## Completion rule

A review record is complete when it has its setup, evidence and outcome.
A fix is verified only by a linked retest; a spec's existence does not verify it.
Model-only results are reported as simulated reviews, never as real-user findings.
Before wider product conclusions, observe representative people performing the
same tasks. Product-owner acceptance and catalog publication are separate steps.
