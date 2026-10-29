# Round 0: L evaluates the existing centre while S develops journeys

**Owner**: L. **State**: [RUN-001](RUN-001.md) recorded: workshop override to one
jobseeker task (Alex, unfinished draft) across three model families. Priya/Sam probes not run.
**Pinned baseline**: `4e067fa6ecfc073263890ef7a029674cc3c4f917`.
**Source**: S's `notification-centre` branch when fetched on 2026-10-29.
Its `docs/careers` and `docs/static` files are byte-identical in Git to the
previous `9d0155cd` baseline. New journey/resilience notes are design context,
not evidence of observed stumbles or features already implemented.

L can run this batch immediately. S concurrently develops assumptions, personas,
email/LinkedIn/direct-job journeys and the next experience slice on S's branch.
L does not need S's new email screens or a completed journey catalog for this batch.

## Serve the fixed version independently

From your own repository checkout, create a detached snapshot once:

```powershell
git worktree add --detach .workshop/baseline-v0 4e067fa6ecfc073263890ef7a029674cc3c4f917
python -m http.server 8012 --bind 127.0.0.1 --directory .workshop/baseline-v0/docs
```

Start at `http://127.0.0.1:8012/careers/index.html`. If the worktree already
exists, verify `git -C .workshop/baseline-v0 rev-parse HEAD` matches the pin and
run only the server command. Keep this snapshot unchanged; S edits a separate
checkout. The `.workshop/` directory is ignored by the parent repository.
The static snapshot needs no Flask secrets, dependency install or full-site
dotrun process. Ubuntu asset/font requests can still use the original external
URLs in the copied pages. Use another local port if 8012 is occupied and record it.

The server is local to its machine. If a Copilot browser cannot access that
machine, use an accessible preview that demonstrably serves this same revision;
record the actual URL/revision. A moving GitHub Pages deployment is not a pin.

## Prepare each independent browser session

1. Use a fresh browser profile/context per reviewer. Concurrent sessions must not
   share `localStorage`; the prototype key is `careers-notif-v1`.
2. The review owner visits `/careers/notifications/index.html`, selects the demo
   persona and uses its reset control. Reset retains the selected persona.
3. Return to `/careers/index.html` before giving the reviewer its task. Keep
   setup, known issues, source code and intended control locations out of the
   blind review prompt. Record that identity/state were pre-seeded by L.
4. Record commit, URL, actual model/tool identity, persona, browser context and
   viewport using [the run template](templates/journey-review.md).

## Three runnable probes

| Probe | Actual baseline persona | Neutral task | Context |
|---|---|---|---|
| R0-ALEX | Alex Morgan (`alex`), jobseeker | You applied for the Senior Software Engineer role in Ubuntu Foundations. Find out what changed in your application and what, if anything, you need to do next. | Existing J-CAREERS-CENTRE; A-006, A-008, A-011 |
| R0-PRIYA | Priya Nair (`priya`), hiring manager | You manage the Ubuntu Foundations vacancy. Find a candidate request needing your attention and go to where you can act on it. | Baseline staff careers-entry probe; A-006, A-010, A-011 |
| R0-SAM | Sam Okafor (`sam`), recruiter | You coordinate the engineering hiring pipeline. Find the outstanding interview-feedback request and go to where you can follow it up. | Baseline staff careers-entry probe; A-006, A-010, A-011 |

Priya is the hiring-manager fixture here; a jobseeker named Priya in S's new
narrative catalog is a separate scenario, not an implemented identity. The
probes exercise only existing capabilities and do not claim email arrival.

Run each probe independently with each requested available model family through
Copilot (GPT, Claude, Gemini); record actual selected model names. This yields
nine model/persona combinations without assigning one model to one persona.
Report unavailable browser/model combinations honestly and continue the runnable
ones. A browser/tool failure is distinguished from a product failure.

## Evidence and handoff back to S

Save actual runs under this `reviews/` directory and add observed findings to
[the findings index](README.md#findings-index). "No issue found" is valid.
Record task success, route/actions, observed hesitation, expected/actual result,
evidence and reproducibility. Label speculation and source audits separately.

L reproduces and groups findings into a small batch for S. Triage together:
accepted change, implementation bug, needs evidence, deferred or rejected, with
reasons. Link any product decision, fix spec/bug, implementation commit and
original-task retest. A fix is not verified until its retest exists.

Email entry, expired-session continuation, LinkedIn/direct-job landing and S's
new narrative journeys are developed by S concurrently. L prepares their tasks
from S's source-message/subject/destination mapping and runs them when a slice
is runnable. Retests similarly depend on an actual fix revision. Do not count
unimplemented screens as observed stumbles in this baseline run.

## Moving to the next round

Keep the current review pin until its run ends. S hands L one runnable slice
with commit, served URL, scenario/assumption IDs, fixture mapping and reset steps;
L then creates a new pinned batch and records its differences. There is no need
to wait for all of S's journeys. Baseline evaluation does not accept the draft
product spec or change the imported UI; product changes retain their checkpoints.
