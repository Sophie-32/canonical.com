# Current work

**Next tasks**: Foundation handoff using [the two-person agreement](../../docs/workshop.md).
Participant sessions own journey development and Copilot walkthrough execution;
those are workshop scope, not deferred-work tickets in this foundation session.
**Blockers**: none for foundation scope. CP1 remains the product-specification
acceptance checkpoint and does not retroactively gate the imported prototype.
**Checkpoint links**: [gates](spec.md#checkpoints).
**Entry checkpoint**: CP1
**Validation**: [plan](plan.md).

## Tasks

- [x] T001 Apply local agent-workflow-kit with a subagent; preserve fork boundaries.
- [x] T002 Draft the MVP specification, decisions and independent-review protocol.
- [x] T003 Save the [CP1 owner review request](reviews/CP1-request.md).
- [x] T004 Validate the documentation package with offline workflow and link checks.
- [x] T005 Pull the colleague's `notification-centre` implementation at `9d0155cd`.
- [x] T006 Make the fork the sole `origin` remote and create the evidence-foundation branch.
- [x] T007 Record file ownership, review handoff, Copilot execution and the imported baseline.
- [x] T008 Validate the combined foundation package for sharing on its separate fork branch.

## Known limits

The Spec Kit CLI is not installed by this adoption. The colleague's existing
prototype is imported; this session does not alter its UI or claim a walkthrough
or fix-verification result. Copilot is the participant's model-review harness;
standalone CLI availability in this checkout is not an execution blocker.

## Setup verification - 2026-10-29

- `wfk lint --repo C:\work\code\canonical.com --json`: checked this package on
  its declared branch; no errors or warnings.
- Combined package `wfk lint`: no errors or warnings on the declared workshop branch.
- Local Markdown links: checked 23 foundation, spec and knowledge-base documents;
  no broken paths.
- `git diff --check`: passed. Runtime checks were not run for documentation changes.
- Imported UI/assets: no changes relative to `9d0155cd` under `docs/careers` or
  `docs/static`. Fork is the sole remote, named `origin`.
- The original foundation files were uncommitted before the pull; they were
  preserved without a conflict. Source-branch publication is separate from
  publishing the static experience or claiming a completed model review.
