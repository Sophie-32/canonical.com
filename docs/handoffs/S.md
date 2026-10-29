# S: personas, entry assumptions and user journeys

**Branch**: `workshop/s-journeys-personas`.
**Ownership assigned by L**: S owns the first lane: personas, user goals, arrival
contexts, journey definition, fixture/experience coherence and product decisions.
L owns the evaluation, specification/evidence workflow and remaining foundation work.

## Start here

```powershell
git fetch origin
git switch --track origin/workshop/s-journeys-personas
git remote get-url --push origin
```

Use your own clone/worktree. If this branch already exists locally, switch to it
and use `git pull --ff-only` instead of recreating it. `origin` must be exactly
`https://github.com/Sophie-32/canonical.com` for pushing. Push only your branch;
never push to Canonical upstream or force-push a participant branch.

Read in order:

1. [AGENTS.md](../../AGENTS.md) and [workshop ownership](../workshop.md).
2. [Assumption register](../../.kb/design/assumptions.md) and
   [entry-context seeds](../../.kb/design/user-flows/notification-centre/entry-contexts.md).
3. Existing [product decisions](../../.kb/design/product.md),
   [component notes](../../.kb/design/components/notification-centre.md), and
   [journeys](../../.kb/design/user-flows/notification-centre/overview.md).
4. The [acceptance proposal](../../specs/001-notification-centre/spec.md) and
   [baseline differences](../../specs/001-notification-centre/reviews/baseline.md)
   as shared context. They remain draft; do not silently replace your recorded choices.

## Task brief for S's harness

- Flesh out jobseeker personas by lifecycle and goal, not just role: first-time
  visitor, returning applicant, matching-role browser and unfinished applicant.
  Keep hiring manager/recruiter journeys connected to their assigned work.
- Start from email, LinkedIn/direct job link and careers entry. Use the assumption
  IDs and seed message references to describe what the person knows on arrival.
- For each selected journey specify the source message/post, job/application,
  identity/session, first landing, related notification, next-action destination,
  completion and return, with closed/stale/unavailable cases.
- Decide how email and in-app messages refer to the same event/place. Do not
  assume every external link must go through the centre or that a link proves identity.
- Maintain the assumption register with evidence-labelled statuses. Record
  adopted product choices and reasons in product.md; link L's findings rather
  than starting another evidence store.
- Map synthetic design references to real fixture IDs/routes. Use the existing
  static prototype as the baseline; keep fixture data and UI coherent. Adopted
  implementation changes follow the relevant product/spec checkpoints.

S owns `.kb/design/**` except its `validation.md` bridge, plus `docs/careers/**`,
`docs/static/**` and this S brief. L owns `specs/**`, the validation bridge,
workshop/process docs and the L brief. Shared instruction/config changes are
coordinated through L. The spec catalog routes to L's branch; S's journey work
does not require changing that package's declared branch.

## Handoff to L

Commit the journey/fixture map and provide its commit, preview URL serving that
commit (if implemented), selected J-/A-IDs, source artifact locations, initial
identity, route/notification mapping and reset instructions. Describe unresolved
choices and known limits separately from the neutral prompts given to reviewers.
L turns this into independent Copilot walkthroughs and the decision/fix/retest record.

When ready, verify the fork URL and use `git push -u origin HEAD`. Coordinate
integration into `notification-centre`; do not update L's branch or the publishing
branch as a side effect of completing a journey brief.
