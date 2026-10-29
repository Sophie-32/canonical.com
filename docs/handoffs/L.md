# L: evaluation, specifications and the track record

**Branch**: `workshop/l-evaluation-records`.
S owns personas, entry assumptions and journeys. L owns the remaining workflow
foundations, acceptance/fix specs, Copilot reviewer orchestration, evidence,
finding triage and retest records. Read [S's brief](S.md) to understand the boundary.

```powershell
git fetch origin
git switch --track origin/workshop/l-evaluation-records
git remote get-url --push origin
```

Use your own checkout. If the branch exists locally, switch to it and pull
`--ff-only`. Push only to `https://github.com/Sophie-32/canonical.com`, never to
Canonical upstream; the fork is the only remote, named `origin`.

## Task brief for L's harness

1. Read [AGENTS.md](../../AGENTS.md), [workshop ownership](../workshop.md), the
   [assumption register](../../.kb/design/assumptions.md),
   [entry seeds](../../.kb/design/user-flows/notification-centre/entry-contexts.md),
   [spec](../../specs/001-notification-centre/spec.md) and
   [review protocol](../../specs/001-notification-centre/reviews/README.md).
2. Consume S's selected journey IDs, persona/session, source artifact, fixture
   mapping and exact prototype revision. Check the email/post, notification and
   landing refer to the same subject/event; do not invent a missing source artifact.
3. Design neutral tasks that start at the agreed entry surface. Give the reviewer
   the visible email/post when relevant; do not hand it the intended route or answer.
4. Launch genuine model reviewers through Copilot, recording actual model names,
   browser capability, scenario/assumption IDs and tested revision. Keep browser
   state isolated and reset; record observations separately from speculation.
5. Reproduce and deduplicate stumbles. Triage with S, keep the reason for every
   disposition, and link accepted work to a fix spec/bug and an adopted product decision.
6. Keep the chain: assumption -> journey/source artifact -> run/finding -> decision
   -> spec/change -> original-task retest. Request assumption updates from S;
   link evidence instead of concurrently editing S's register or UI.

L owns `specs/**`, `.kb/design/user-flows/notification-centre/validation.md`,
`docs/specs.md`, `docs/workflow.md`, `docs/workshop.md` and this L brief. Coordinate
shared agent instruction/config changes. S owns the experience and its input
assumptions; agreement is required before changing the intended behaviour.

The foundation session delivers these briefs and branches. Participant sessions
execute the journeys and reviews; no review result is implied by this handoff.
