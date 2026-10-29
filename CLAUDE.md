@AGENTS.md

Push only to `https://github.com/Sophie-32/canonical.com`. `origin` must point to
that fork; verify `git remote get-url --push origin` before every push. Never
push to `canonical/canonical.com` under any remote name. The upstream remote was
removed deliberately. Do not use force, `--all`, or `--mirror` pushes.

Read [the workshop ownership and handoff rules](docs/workshop.md). Work in your
own clone/worktree and branch, within your lane. Copilot may run independent
model reviewers; log actual model identities and the tested revision.

S: follow [S's brief](docs/handoffs/S.md). L: follow [L's brief](docs/handoffs/L.md).
Read [entry assumptions](.kb/design/assumptions.md) before defining journeys or reviews.
