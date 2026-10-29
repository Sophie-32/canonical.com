# Spec-first prototype workflow

This repository uses agent-workflow-kit version 2. Start with the
[spec catalog](specs.md), then read the selected package on its declared branch.
The repository's [contribution instructions](../AGENTS.md) remain authoritative.
For the two-person workshop, start with [ownership and handoffs](workshop.md).
The colleague's prototype is already present under `docs/careers/`; this session
establishes the shared foundations for participant sessions.

## Ownership and evidence

- `spec.md`: intended outcomes, requirements, lifecycle, and owner checkpoints.
- `plan.md`: implementation approach after the specification is accepted.
- `tasks.md`: bounded execution, next actions, and blockers.
- `reviews/`: saved review requests, observed evidence, findings, dispositions,
  and verification of accepted fixes.

The experience owner's `.kb/design/` holds product/design decisions and journey
notes. The spec package owns the acceptance proposal, workshop process decisions
and review evidence; link adopted choices to the product log rather than creating
a competing product-decision history. The active workshop baseline is the fork's
`origin/notification-centre`, configured as `targetBranch`; `main` lacks the prototype.
S owns the experience, [entry assumptions](../.kb/design/assumptions.md) and
journey mapping on `workshop/s-journeys-personas`; L owns the remaining workflow
and this spec/evidence package on `workshop/l-evaluation-records`. Start with the
appropriate [S](handoffs/S.md) or [L](handoffs/L.md) brief. Model tasks must carry
the scenario/assumption and source-artifact references from S's handoff.

A review finding is a proposal until triaged. Record whether it is accepted,
deferred, rejected, or duplicated, with a reason and links to any resulting spec.
Only the owner clears checkpoints. Review evidence cannot clear its own gate.
Agent walkthroughs are simulated evaluations; keep them distinct from research
with actual users. Record the actual model, scenario, prototype revision, observed
actions, and verification limits without inventing execution evidence.
The participant uses Copilot for model delegation. This checkout does not need
standalone Gemini or Claude CLIs to establish those foundations.

## Local commands

The existing local kit is at `C:\work\code\agent-workflow-kit`. In PowerShell:

```powershell
& 'C:\work\code\agent-workflow-kit\bin\wfk.cmd' lint --repo . --json
& 'C:\work\code\agent-workflow-kit\bin\wfk.cmd' run --repo . --package specs/<package> --json
```

The second command is a preview. Live workers require explicit authorization and
`--apply`; previewing does not launch agents. `wfk new --apply` creates Git
commits and a package branch, so review its preview before using it. Preserve the
fork-only push configuration and never push to Canonical upstream.
`origin` now names only `https://github.com/Sophie-32/canonical.com`; the original
Canonical upstream remote was removed. Verify the push URL before each push.

## Adoption provenance and limits

Adopted on 2026-10-29 from
[lyubomir-popov/agent-workflow-kit](https://github.com/lyubomir-popov/agent-workflow-kit),
local revision `6e2123d82d02ec2c8e135a6156413a3c1377d609`, using a reviewed
`wfk init` preview followed by `wfk init --apply`. Existing repository instructions
were preserved and workflow routing was added separately. The kit requires
Python 3.10+ and Git 2.38+ and installs no Python dependencies.

The adoption adds Spec Kit project override templates under
`.specify/templates/overrides/`. It does not install the upstream Spec Kit CLI,
vendor scripts, model CLIs, user-level prompts, or Git hooks. Specs can follow
the Spec Kit format without claiming those executables are installed. No live
model walkthrough has run merely because these records exist.
