# Two-person notification-centre workshop

## Shared starting point

The colleague's implementation was pulled from the fork's `notification-centre`
branch at `9d0155cdaf908b832dfe4ff154afb89b787760a8` on 2026-10-29. The fork's
`prototype` branch pointed to the same commit when checked. It contains a
three-persona centre, fictional notifications, demo workspaces and design notes.
This is existing work to iterate on, not an unbuilt MVP.

`workshop/evidence-foundations` adds the common workflow, review records and this
division of ownership. The foundation session does not run the workshop journeys
or redesign the UI. Those are the participant sessions' agreed scope, not
deferred-work tickets. No completed review is implied by a template.

## Divide by responsibility, across all personas

| Lane | Journey and experience owner (colleague) | Evaluation and record owner (this checkout) |
|---|---|---|
| Main outcome | A coherent careers -> notification -> next-action journey | Reproducible walkthroughs and a traceable reason for each iteration |
| Own files | `docs/careers/**`, `docs/static/**`, `.kb/design/**` except the validation bridge below | `specs/001-notification-centre/**`, `.kb/design/user-flows/notification-centre/validation.md`, `docs/specs.md`, `docs/workflow.md`, `docs/workshop.md` |
| Typical work | Flesh out scenarios, content, UI, fixture data, states and recovery paths; implement accepted fixes | Prepare neutral tasks; launch Gemini/Claude/GPT reviewers through Copilot; capture evidence, deduplicate findings, draft fix specs and retest |
| Decisions recorded | Product/design choice and why in `.kb/design/product.md` | Evidence, disposition and link to the product decision in the spec package |
| Git lane | Existing `notification-centre` branch, with topic branches for individual fixes | `workshop/evidence-foundations`, with topic branches for review batches if useful |

Each person uses their own harness, clone/worktree and branch. Do not point two
agents at the same working directory. Both lanes cover all three personas; splitting
jobseeker versus recruiter would make both people edit the same centre and script.
The evaluation owner is an investigator and critic, not just a note-taker.

Starter prompt for the experience harness:

> Read AGENTS.md and docs/workshop.md. I own the experience lane. Use the existing
> notification-centre implementation and .kb/design journeys. Flesh out the
> end-to-end experience and record product choices with reasons. Keep evaluation
> records owned by the other participant; hand over an exact commit, URL and
> resettable fixture before reviews. Push only to Sophie's fork on my branch.

Starter prompt for the evaluation harness:

> Read AGENTS.md, docs/workshop.md and the notification-centre review protocol.
> I own the evaluation lane and use Copilot for model subagents. Review the agreed
> experience revision using independent neutral tasks, record actual model names
> and observations, triage stumbles into scoped fixes, and link decisions through
> retest. Keep UI and fixtures owned by the experience participant. Push only to
> Sophie's fork on my branch.

The fixture data and renderer currently share `docs/careers/app/notifications.js`,
so both belong to the experience owner. The evaluation owner requests fixture
changes through findings rather than editing that file during a review.
`AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md` and `.workflow-kit.json`
are shared foundation files: nominate one editor before changing them again.
The evaluation owner maintains catalog numbering when a finding becomes a spec.

## One handoff contract

The experience owner supplies a handoff identifying:

1. Exact commit and preview URL serving that commit. If preview deployment lags,
   wait or serve the pinned checkout; do not label the deployed branch as tested.
2. Persona/task being offered, fixture version, reset instructions and any known
   implementation limitations. Keep known issues out of the blind reviewer prompt.
3. Routes: careers entry, centre and target workspace. Existing baseline paths are
   `docs/careers/index.html`, `docs/careers/notifications/index.html` and
   `docs/careers/app/index.html?n=<id>`; preserve the hosting base path in URLs.

The evaluation owner gives each independent reviewer a neutral task, persona and
the pinned URL. The owner prepares/reset persona state in a separate browser
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

The record is: **observation -> decision and reason -> fix spec/bug -> change ->
retest**. Product decisions have one home in `.kb/design/product.md`; evidence
has one home in the spec's `reviews/`. Link between them rather than copying
competing decision lists. Source inspection is labelled separately from observed
browser behaviour. Model walkthroughs and human walkthroughs are separate evidence.

## Synchronizing without collisions

The fork is the only remote and is named `origin`. Its `main` branch does not yet
contain the colleague's prototype; do not use `main` as the workshop baseline.
Foundation changes are shared by a normal pull request targeting the fork's
`notification-centre` branch. The experience owner integrates it when convenient;
the evaluation branch does not update the colleague's branch or publishing branch.
Before the foundation PR is integrated, read foundation documents from this
branch and run UI reviews against the agreed experience commit.

For a separate participant checkout:

```powershell
git clone https://github.com/Sophie-32/canonical.com canonical-workshop
cd canonical-workshop
git fetch origin
git switch -c workshop/my-journey-change origin/notification-centre
git remote get-url --push origin
```

For the evaluation lane after the foundation branch is published:

```powershell
git fetch origin
git switch -c workshop/my-review-batch origin/workshop/evidence-foundations
git remote get-url --push origin
```

Use your own topic name; never reuse a branch someone else is editing. Merge
accepted experience updates into the evaluation branch between review rounds,
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
