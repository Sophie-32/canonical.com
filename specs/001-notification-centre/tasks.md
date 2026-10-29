# Current work

**Next tasks**: Foundation handoff using [the two-person agreement](../../docs/workshop.md).
L starts [Round 0](reviews/round-0.md) immediately on the existing centre while
S develops the next journey slice. New-slice evaluation and fix retests follow
their runnable handoffs; no wait for the entire experience lane is required.
S starts from [the S brief](../../docs/handoffs/S.md) on
`workshop/s-journeys-personas`; L uses [the L brief](../../docs/handoffs/L.md) on
`workshop/l-evaluation-records`.
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
- [x] T009 Seed an explicit assumption register and source-message/subject/destination scenarios.
- [x] T010 Assign S/L file ownership and write self-contained agent handoffs.
- [x] T011 Validate the updated assumption/handoff package on L's declared branch.
- [x] T012 Preserve S's new journey/resilience notes and prepare an immediate fixed-baseline review packet.

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
- Assumption/S-L update: workflow lint passed without errors/warnings; local links
  checked across 28 documents; whitespace checks passed. No UI/assets changed.
- Concurrent-start update: preserved S's new documentation; workflow lint passed
  without errors/warnings and local links passed across 31 documents. The detached
  `4e067fa6` snapshot served careers, centre, workspace, notification JS and CSS
  with HTTP 200. Its temporary smoke-check server was stopped. No browser or
  model walkthrough result is claimed; Round 0 is ready for L's participant session.
- `git diff --check`: passed. Runtime checks were not run for documentation changes.
- Imported UI/assets: no changes relative to `9d0155cd` under `docs/careers` or
  `docs/static`. Fork is the sole remote, named `origin`.
- The original foundation files were uncommitted before the pull; they were
  preserved without a conflict. Source-branch publication is separate from
  publishing the static experience or claiming a completed model review.
