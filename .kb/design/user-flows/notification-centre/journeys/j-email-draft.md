# J-EMAIL-DRAFT: reminder email to a completed draft application

**Owner**: S (journey and product decisions, implementation). **Consumer**: L (evaluation). **Status**: scope agreed, slice in progress (see [Handoff to L](#handoff-to-l)).
Part of the [entry-context seeds](../entry-contexts.md). Assumptions are **hypotheses**, not findings: see the [assumption register](../../../assumptions.md).

## Scope (deliberately small)

| In | Out |
| :-- | :-- |
| One jobseeker: Alex Morgan, returning applicant with an unfinished draft | Other personas, new journeys, LinkedIn and direct-link entries |
| One entry: a synthetic reminder email, modelled as a local page | Real email, authentication or recruitment integration |
| One journey: email → correct draft → understand the required action → complete the simulated task → recognise the updated state in the notification centre | Edits to the hiring-manager and recruiter fixtures (kept available, unchanged) |
| Reuse existing notification `n02` and the simulated workspace | A new notification type |

## Persona

| | |
| :-- | :-- |
| Who | Alex Morgan, returning applicant (lifecycle stage: unfinished applicant) |
| Goal | Not miss the closing date: submit the draft application for Cloud Solutions Architect, and be sure it worked |
| Knows on arrival | They started this application; they got an email reminder. They do not know the exact deadline or whether anything is missing |
| Context | Opens the email on a different device from where they started the draft (simulated) |

## Starting session (hypothesis A-007)

Alex is **not signed in** in this browser (fresh state). The email click alone does not establish identity: the CTA first goes to a **simulated sign-in** step ("Continue as Alex Morgan, simulated") that preserves the destination and then lands on the draft. If the browser already has Alex signed in, that step is skipped and the draft opens immediately. There is no real authentication.

## Subject and fixture mapping

Design references use the [shared catalogue](../entry-contexts.md#shared-subjects-and-communication-references). New references added by this journey:

| Reference | Artifact | Implemented as |
| :-- | :-- | :-- |
| JOB-02 | Cloud Solutions Architect (synthetic requisition `REQ-CSA-02`, Remote, EMEA) | Text in the email, `n02` context and the draft page |
| APP-02 | Alex's **draft** (not submitted) application for JOB-02 | The draft page for `n02` |
| EVENT-02 | Draft expires Sun 1 Nov 2026, 11:59 PM UTC; reminder sent Wed 28 Oct 2026, 5:40 PM | Email date and `n02` timestamp |
| EMAIL-03 | The reminder email, below | `docs/careers/app/mail/index.html?m=email-03` |
| n02 | Existing notification "Complete your application" | `docs/careers/app/notifications.js`, id `n02` |
| Workspace | Existing simulated workspace | `docs/careers/app/index.html?n=n02` |

### EMAIL-03 content (synthetic; never sent)

- **From**: Canonical Careers `<careers@mail.example>`   **To**: alex.morgan@example.com   **Date**: Wed, 28 Oct 2026, 5:40 PM
- **Subject**: Your Cloud Solutions Architect application is still a draft
- **Body**: Hi Alex, you started an application for **Cloud Solutions Architect** (REQ-CSA-02, Remote, EMEA) but haven't submitted it. It closes on **Sun 1 Nov 2026, 11:59 PM UTC**. Your draft is saved; you only need to review it and submit.
- **CTA** (button): **Complete application**

### Consistency rules (email = notification = destination)

| Element | Email | Notification `n02` | Destination |
| :-- | :-- | :-- | :-- |
| Job | Cloud Solutions Architect, REQ-CSA-02 | same | same, as a job snapshot |
| Deadline | Sun 1 Nov 2026, 11:59 PM UTC | same | same |
| Action name | Complete application | Complete application | Page title "Complete application", button "Submit application" |
| Event time | Wed 28 Oct, 5:40 PM | same | not repeated |
| After submit | n/a | Row becomes "Application submitted" | "Application submitted" confirmation with receipt time |

## Intended destination

The CTA goes to the **draft itself** (`?n=n02`), not the notification centre and not a jobs list (hypothesis A-002, A-011). The centre reflects the result afterwards, and the draft page links back to it.

## Assumption IDs used (all hypotheses, status proposed)

| ID | What this journey tests |
| :-- | :-- |
| A-002 | A returning applicant expects the named application, not an unrelated list. Choice: CTA lands on the draft |
| A-007 | An email click on a new device lacks identity. Choice: a simulated sign-in that preserves the destination |
| A-008 | Email and in-app agree on subject/event; reading and completing differ. Choice: opening the email does not change in-app read state; submitting resolves `n02` |
| A-011 | The person recognises the same job/application across email, destination and centre |
| A-009 (partial) | Email opened after submission: shows the submitted state, not an error |

## Happy path

1. **Mail**: Alex opens EMAIL-03 (entry URL below) and reads the subject, deadline and CTA.
2. **Click** "Complete application". No session → simulated sign-in → **Continue as Alex Morgan**.
3. **Draft page** (`n02`): sees the job snapshot, status "Draft, not submitted", deadline with time zone, a summary of saved answers, and one primary action.
4. **Submit** application: sees an explicit confirmation with receipt time and what happens next.
5. **Centre**: bell count drops; `n02` now reads "Application submitted" with the submitted state; "Needs action" no longer lists it.

## Other paths

| Case | Behaviour |
| :-- | :-- |
| Already signed in | Sign-in step skipped |
| Email reopened after submitting | CTA opens the draft page already showing the submitted confirmation |
| Different persona session (Priya, Sam) | Draft page says it is not available to them (existing baseline behaviour) |
| Deadline passed / vacancy closed | Not implemented; recorded as a known limit |

## Handoff to L

Filled in at each runnable slice. **Not yet runnable** until the slice below is committed.

| Item | Value |
| :-- | :-- |
| Commit | _set when the slice is committed_ |
| Preview | Pinned checkout: `cd docs && python3 -m http.server 8010` |
| Entry URL | `http://localhost:8010/careers/app/mail/index.html?m=email-03` |
| Persona and session | Alex Morgan, signed out |
| Centre / workspace routes | `…/careers/notifications/index.html` · `…/careers/app/index.html?n=n02` |
| Reset | Open the centre and use "Reset demo state", or clear site data for the origin |
| Fixture mapping | See the table above |
| Known limits (not for blind reviewers) | No expired-deadline state; no real email; "what happens next" timeframe is a placeholder |

Back to [overview](../overview.md).
