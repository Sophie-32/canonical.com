# S and L: notification-centre workshop

**S** owns personas, assumptions, entry contexts and journeys/experience.
**L** owns the remaining workflow foundations, evaluation, specifications,
evidence and retests. Start with [S's agent brief](handoffs/S.md) or
[L's agent brief](handoffs/L.md), then read the
[assumption register](../.kb/design/assumptions.md).

## Shared starting point

The colleague's implementation was pulled from the fork's `notification-centre`
branch at `9d0155cdaf908b832dfe4ff154afb89b787760a8` on 2026-10-29. The fork's
`prototype` branch pointed to the same commit when checked. It contains a
three-persona centre, fictional notifications, demo workspaces and design notes.
This is existing work to iterate on, not an unbuilt MVP.

`workshop/evidence-foundations` supplies a shared base containing the workflow,
assumption register, scenario seeds and both handoffs. S and L's separate branches
start from that same updated base. The foundation session does not run the workshop journeys
or redesign the UI. Those are the participant sessions' agreed scope, not
deferred-work tickets. No completed review is implied by a template.

## Divide by responsibility, across all personas

| Lane | S: personas, journeys and experience | L: evaluation and track record |
|---|---|---|
| Main outcome | A coherent careers -> notification -> next-action journey | Reproducible walkthroughs and a traceable reason for each iteration |
| Own files | `docs/careers/**`, `docs/static/**`, `.kb/design/**` except the validation bridge below; `docs/handoffs/S.md` | `specs/**`, `.kb/design/user-flows/notification-centre/validation.md`, `docs/specs.md`, `docs/workflow.md`, `docs/workshop.md`, `docs/handoffs/L.md` |
| Typical work | Flesh out personas, assumptions, email/LinkedIn/direct-link scenarios, content, UI, fixtures and recovery paths; implement accepted fixes | Prepare neutral tasks from S's scenario handoff; launch Gemini/Claude/GPT reviewers through Copilot; capture evidence, deduplicate findings, draft fix specs and retest |
| Decisions recorded | Product/design choice and why in `.kb/design/product.md` | Evidence, disposition and link to the product decision in the spec package |
| Git lane | `workshop/s-journeys-personas` | `workshop/l-evaluation-records` |

Each person uses their own harness, clone/worktree and branch. Do not point two
agents at the same working directory. Both lanes cover all three personas; splitting
jobseeker versus recruiter would make both people edit the same centre and script.
The evaluation owner is an investigator and critic, not just a note-taker.

Prompt for S's harness: "Read AGENTS.md and docs/handoffs/S.md. I am S; work on
my branch, starting with assumptions, personas and entry-to-destination journeys."

Prompt for L's harness: "Read AGENTS.md and docs/handoffs/L.md. I am L; consume
S's journey handoff and own evaluation, specifications and the track record."

The fixture data and renderer currently share `docs/careers/app/notifications.js`,
so both belong to the experience owner. The evaluation owner requests fixture
changes through findings rather than editing that file during a review.
`AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md` and `.workflow-kit.json`
are shared foundation files: nominate one editor before changing them again.
L maintains catalog numbering when a finding becomes a spec. S edits the shared
assumption register; L links evidence and proposes updates without concurrent edits.

## One handoff contract

The experience owner supplies a handoff identifying:

1. Exact commit and preview URL serving that commit. If preview deployment lags,
   wait or serve the pinned checkout; do not label the deployed branch as tested.
2. Journey/assumption IDs; source email/post/direct-link artifact; intended
   job/application/event; identity/session; first landing and related notification.
3. Persona/task being offered, fixture version, reset instructions and any known
   implementation limitations. Keep known issues out of the blind reviewer prompt.
4. Routes: entry, centre and target workspace. Existing baseline paths are
   `docs/careers/index.html`, `docs/careers/notifications/index.html` and
   `docs/careers/app/index.html?n=<id>`; preserve the hosting base path in URLs.

L gives each independent reviewer a neutral task, persona, the visible source
artifact where relevant, and the pinned entry URL. Start at the scenario's actual
entry surface, which may be an email or job link rather than careers home. L resets
persona state in a separate browser
profile/context for each run; they must not share `localStorage`. The current
reset control preserves persona, so check the selected identity after resetting.
Copilot can launch the requested model subagents; record the actual selected
model names and browser capability. A missing standalone CLI in another harness
is not a finding about Copilot availability.

Return one finding record per observed issue, with revision, reproduction,
evidence and impact. Link duplicates instead of creating duplicate fix specs.
Triage together: accept, investigate, defer or reject, with a reason. A distinct
accepted change gets a scoped fix spec; a small implementation defect may be a
bug record. The experience owner implements; the evaluation owner repeats the
original task on the fix commit. A review may legitimately find no problem.

The record is: **assumption -> journey/source artifact -> observation -> decision
and reason -> fix spec/bug -> change -> retest**. Product decisions have one home
in `.kb/design/product.md`; entry hypotheses live in `.kb/design/assumptions.md`; evidence
has one home in the spec's `reviews/`. Link between them rather than copying
competing decision lists. Source inspection is labelled separately from observed
browser behaviour. Model walkthroughs and human walkthroughs are separate evidence.

## Synchronizing without collisions

The fork is the only remote and is named `origin`. Its `main` branch does not yet
contain the colleague's prototype; do not use `main` as the workshop baseline.
Both participant branches include the shared foundations before they diverge.
S works on `workshop/s-journeys-personas`; L works on
`workshop/l-evaluation-records`. The original `notification-centre` and `prototype`
branches are left untouched by foundation publication. Integrate adopted changes
through normal review, coordinating with S before changing either original branch.
The spec catalog declares L's branch for the evaluation package; S reads that
acceptance proposal as context and owns the separate `.kb/design` journey material.

For S's separate participant checkout:

```powershell
git clone https://github.com/Sophie-32/canonical.com canonical-workshop
cd canonical-workshop
git fetch origin
git switch --track origin/workshop/s-journeys-personas
git remote get-url --push origin
```

For L's checkout:

```powershell
git fetch origin
git switch --track origin/workshop/l-evaluation-records
git remote get-url --push origin
```

If a local branch already exists, switch to it and pull `--ff-only`; do not
recreate it. Never push to the other participant's branch. Merge
accepted S updates into L's branch between review rounds,
then pin the next run's commit. Do not pull/rebase in the middle of a run.
Only the experience owner integrates UI changes into `notification-centre` and
updates whichever branch is configured for publishing. Before pushing a topic
branch, confirm the push URL is exactly the fork and use
`git push -u origin HEAD`. Never force push or push to Canonical upstream.

## Baseline differences to discuss

The colleague's notes and implementation are preserved. The
[draft acceptance spec](../specs/001-notification-centre/spec.md) is a proposed
contract, not evidence that the current prototype already meets it. For example,
the implementation counts completed tasks as read while the draft keeps those
states independent. Record that difference without automatically changing the UI
or presenting it as an observed usability stumble. The reconciliation is in the
[baseline note](../specs/001-notification-centre/reviews/baseline.md).
