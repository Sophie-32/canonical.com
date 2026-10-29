# Journey-review protocol and evidence index

**Status**: foundation protocol ready for participant sessions; no walkthrough
results are recorded in this package. Execution is workshop scope, not deferred work.
Related: [spec](../spec.md), [decisions](../decisions.md), [CP1](CP1-request.md).
Start with the [workshop ownership/handoff](../../../docs/workshop.md) and
[imported baseline](baseline.md).

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

Start each run on the careers page in its assigned fixture, without hints about
where controls are or how the UI should work:

- Jobseeker: "You applied for the software engineer role. Find out what changed
  in your application and what, if anything, you need to do next."
- Hiring manager: "You manage the assigned engineering vacancy. Find the latest
  request that needs your attention and go to the place where you can act."
- Recruiter: "You coordinate the assigned hiring pipeline. Find the outstanding
  feedback request and go to the place where you can follow it up."

## Procedure

1. Pin the tested commit/version and served URL; record viewport, fixture/reset
   version, identity and actual model/tool versions. Reset personal and shared
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

Record adopted product choices in [the product log](../../../.kb/design/product.md)
and link to them from findings; the package decision record owns process choices
and proposed changes, not a second authoritative product policy.

Use [the review template](templates/journey-review.md). Store durable run files
here as `RUN-<number>.md` and use stable finding IDs such as `F-001`; those names
are conventions, not evidence that a run has occurred.

## Findings index

No findings recorded. Add rows after observed runs:

| Finding | Run/persona/revision | Evidence | Severity | Disposition and reason | Decision | Fix spec/bug | Change | Retest |
|---|---|---|---|---|---|---|---|---|

## Completion rule

A review record is complete when it has its setup, evidence and outcome.
A fix is verified only by a linked retest; a spec's existence does not verify it.
Model-only results are reported as simulated reviews, never as real-user findings.
Before wider product conclusions, observe representative people performing the
same tasks. Product-owner acceptance and catalog publication are separate steps.
