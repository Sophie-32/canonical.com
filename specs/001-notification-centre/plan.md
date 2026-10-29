# Implementation plan: Careers notification centre MVP

Scope: [specification](spec.md). Authorization belongs to
[checkpoints](spec.md#checkpoints); execution belongs to [tasks](tasks.md).

## Approach

The foundation arrangement preserves the colleague's static prototype pulled
from `origin/notification-centre` at `9d0155cd`. Its UI and `.kb/design` records
remain experience-owned. This branch adds the workflow and evaluation records;
it does not rebuild the centre or change its rendering approach.

Participant sessions follow the [ownership/handoff](../../docs/workshop.md).
S first develops the [entry assumptions](../../.kb/design/assumptions.md), personas
and message/subject/destination journeys under [S's brief](../../docs/handoffs/S.md).
L consumes that scenario map under [L's brief](../../docs/handoffs/L.md).
Copilot launches independent model reviewers against an agreed immutable
revision; the evidence lane records findings and the experience lane implements
accepted changes. Further product changes follow the relevant owner checkpoints.

## Verification

Documentation setup: offline `wfk lint`, local Markdown-link checks and
`git diff --check`. No runtime tests are required for documentation alone.

After CP1, choose checks appropriate to the actual implementation using
`.github/workflows/pr.yaml` and `AGENTS.md`: run `dotrun` before dotrun commands,
djLint for changed Jinja templates, focused tests for changed behaviour, and the
required build/lint checks. Use real browser interaction for the spec's journey
criteria. Preserve observed run evidence under [reviews](reviews/README.md).
