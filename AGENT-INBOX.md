# Agent inbox

Transient agent handoffs belong here. Name the recipient, scope, artifact link
and requested action. Save durable findings in the owning package's `reviews/`.
Preserve unresolved handoffs until receipt and resolution or durable transfer.

## S's harness - journey input handoff ready

Recipient: S. Scope: personas, entry assumptions and journeys on
`workshop/s-journeys-personas`. Read [S's brief](docs/handoffs/S.md), the
[assumptions](.kb/design/assumptions.md) and
[scenario seeds](.kb/design/user-flows/notification-centre/entry-contexts.md).
Requested action: flesh out the source-message -> subject -> notification ->
destination journeys and hand L the selected scenarios/fixture mapping.
This is prepared input; S's receipt/execution is not yet recorded.

## L's harness - evaluation handoff ready

Recipient: L. Scope: remaining workflow/specifications/evidence on
`workshop/l-evaluation-records`. Read [L's brief](docs/handoffs/L.md).
Requested action: use S's journey handoff to prepare independent Copilot reviews
and the assumption/finding/decision/fix/retest record. No review result is implied.
Immediate action: [Round 0](specs/001-notification-centre/reviews/round-0.md) is
ready against the existing centre; start it while S develops the next slice.

## S's harness - receipt and slice handoff for L

Recipient: L. Scope: J-EMAIL-DRAFT on `workshop/s-journeys-personas`.
Receipt: S has received the journey input handoff above and executed it.
Artifact: [journey record](.kb/design/user-flows/notification-centre/journeys/j-email-draft.md).
Requested action: evaluate commit `487831cf` (a later commit may only add this note).
- Serve: `cd docs && python3 -m http.server 8010`
- Entry: `http://localhost:8010/careers/app/mail/index.html`
- Persona/session: Alex Morgan, signed out; sign-in is simulated.
- Reset: reset control on the notifications page, or clear site data.
- Fixtures: email -> n02 -> `careers/app/index.html?n=n02`; mapping in the journey record.
- Assumptions (hypotheses): A-002, A-007, A-008, A-011, partly A-009.
Please send findings here or in `reviews/`; S will triage the highest-impact one.

## L's harness - CP1 owner acceptance

Recipient: L. Scope: `001-notification-centre/spec-r3`, CP1.
The owner replied "accept cp1" on 2026-10-29. Please review the
[owner's acceptance handoff](INBOX.md#owner-acceptance-of-cp1), record the verdict
in the spec package and update its checkpoint table on
`workshop/l-evaluation-records`. This acceptance is not evidence that the
prototype meets the spec or has passed a walkthrough.

## L's harness - status, decision and requests for S (end of workshop)

Recipient: S. From: L, 2026-10-29. Scope: `001-notification-centre` evidence on
`workshop/l-evaluation-records`.
Receipt/resolution of the notes above: Round 0 run as [RUN-001](specs/001-notification-centre/reviews/RUN-001.md);
J-EMAIL-DRAFT `487831cf` evaluated in [RUN-002](specs/001-notification-centre/reviews/RUN-002.md)
and [RUN-003](specs/001-notification-centre/reviews/RUN-003.md); CP1 recorded as owner-cleared in
[the verdict](specs/001-notification-centre/reviews/CP1-owner-verdict.md). These three are resolved.

**Done (simulated model reviews only; no human runs)**
- RUN-001 on `4e067fa6`: one jobseeker task (Alex's unsubmitted Cloud Solutions Architect draft), 3 model families.
  F-001: "Mark task done" closed the task while the draft stayed unsubmitted; 2/3 reported success. Reproduced.
- RUN-002 on your `487831cf`: same task, unchanged. **F-001 retest passes 3/3.**
- RUN-003 on `487831cf`: email entry, signed out, 3 families. Email, sign-in, destination and n02 name the
  same application, deadline and action; read state stays separate from completion.
- Rejected after reproduction: F-002, F-006, F-007 (Gemini Flash reported UI that does not exist, three times).
- Requested model ids, self-reports and the unverified GPT self-report (GPT-5.3-Codex) are in each run record.
- Index: [findings](specs/001-notification-centre/reviews/README.md#findings-index).

**Decision: freeze for the demo, do not integrate yet.** L merged your branch into L's branch (`3f2627c7`)
so records and the tested slice sit together. Nothing goes to `notification-centre`, `prototype` or `main`
until you triage and the owner agrees: F-001's decision is unrecorded, F-005/B-001 are open, Pragma
alignment is unverified, and no human walkthrough exists. A rushed fix now could not be retested in time.

**Requested of S** (details in [handoff-S-002](specs/001-notification-centre/reviews/handoff-S-002.md))
1. Triage F-001 and record the adopted decision ("completion follows submission") in `.kb/design/product.md`, linking RUN-001/RUN-002.
2. Triage F-005 (submitted item keeps caution style and reminder time; 3 runs) and B-001 (security,
   source inspection: `signin/index.html` passes `next` unvalidated to `location.replace`).
3. Add dated evidence notes to A-002, A-007, A-008, A-011 in the assumption register, if you agree.
4. Agree with L whether `cb9c7a2f` findings on `notification-centre` move to, or link from, `reviews/`.

**Remaining after the workshop**: fix commit for F-005/B-001 -> L reruns RUN-003's task on that pin;
J-DIRECT-JOB evaluation when runnable; Priya/Sam staff probes from Round 0; human walkthroughs; Pragma check;
catalog publication stays a separate owner step.

## Handover: S's harness should do the same now

Recipient: S and S's agent. From: L, 2026-10-29. Requested action: close S's lane the way L closed
its lane above, so both branches carry a matching end-of-workshop record. Prompt for S's harness:

> Read AGENTS.md and docs/handoffs/S.md. I am S. Run `git fetch origin`, then on
> `workshop/s-journeys-personas` run `git merge origin/workshop/l-evaluation-records` (L's branch already
> contains all of S's commits; expect no conflicts). Read "L's harness - status, decision and requests for S"
> in AGENT-INBOX.md. Then:
> 1. Record S's triage (accept/defer/reject + reason) for F-001, F-005 and B-001 in a short S note below,
>    and the adopted F-001 decision in `.kb/design/product.md`, linking the RUN records instead of copying them.
> 2. Add dated evidence notes to A-002, A-007, A-008, A-011 in `.kb/design/assumptions.md` if agreed.
> 3. Append "S's harness - end-of-workshop status" here: done, remaining, open decisions, and whether S agrees
>    with the freeze (no integration into `notification-centre`, `prototype` or `main` yet).
> 4. Mark the L notes addressed to S as received. Do not edit `specs/**` or L's records; send requests here.
> 5. Verify `git remote get-url --push origin` is `https://github.com/Sophie-32/canonical.com`, then
>    `git push origin HEAD`. Never push to L's branch, never force-push.

L picks up S's note by merging `origin/workshop/s-journeys-personas` at the start of the next session.
