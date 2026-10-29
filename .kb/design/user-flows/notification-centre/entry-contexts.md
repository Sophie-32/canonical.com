# Entry-context seeds for S's journey work

**Owner**: S. **Consumer**: L's review harness. These are proposed synthetic
scenario seeds, not implemented routes or observed behaviour.
Read the [assumption register](../../assumptions.md) first.

## Shared subjects and communication references

These stable design references connect source messages to their intended place.
S can revise the fixture catalog, preserving mappings or recording replacements.

| Reference | Proposed artifact/subject | Relationship |
|---|---|---|
| JOB-01 | Senior Software Engineer, Ubuntu Foundations | The vacancy already named in Alex's existing `n01` and `n05` fixtures |
| APP-01 | Alex's application for JOB-01 | Subject of the application-update journey |
| EVENT-01 | APP-01 progressed to interview | Event behind the email and related in-app update |
| EMAIL-01 | Subject: "An update on your Software Engineer application"; body says APP-01 progressed to interview; CTA: "View application" | References EVENT-01 and APP-01; related notification is existing `n01`; S chooses the exact landing route |
| SEARCH-01 | Alex's Python/Kubernetes/Linux matching-role results | Search/result context for the existing `n03` job-match notification |
| EMAIL-02 | Subject: "New roles match your skills"; CTA: "View matching roles" | Refers to SEARCH-01, not an application stage; related notification is existing `n03` |
| LINKEDIN-01 | Proposed post advertising JOB-01; CTA: "View job" | Public source content linking to JOB-01; no personal notification is assumed |
| DIRECT-JOB-01 | Shared/bookmarked link naming JOB-01 | Same destination contract as the job post, without an email artifact |

Existing fixture names/IDs are baseline references. The prototype has a generic
workspace for `n01` and a roles-list target for `n03`; it does not yet demonstrate
these email/post entry surfaces or a dedicated JOB-01 page. S's brief owns the
scenario/route decision rather than treating these design references as live URLs.

## Journey seeds

| Journey ID | Starting context and intent | Identity at start | Trace and intended outcome | Assumptions |
|---|---|---|---|---|
| J-EMAIL-APPLICATION | Alex reads EMAIL-01 and wants to know the next application step | Known applicant; current browser session may be absent | EMAIL-01 -> EVENT-01 / APP-01 -> S's chosen landing; `n01` refers to the same event; understand interview stage and next action | A-002, A-007, A-008, A-011 |
| J-EMAIL-MATCH | Alex reads EMAIL-02 and wants to inspect relevant opportunities | Identity/session must be stated, not inferred | EMAIL-02 -> SEARCH-01 -> matching results/job; `n03` carries consistent context | A-003, A-007, A-008, A-011 |
| J-LINKEDIN-JOB | A first-time visitor follows LINKEDIN-01 | Unknown/signed out; no application assumed | LINKEDIN-01 -> JOB-01 -> understand role and apply/save path; centre relevance is a design question | A-001, A-004, A-011 |
| J-DIRECT-JOB | A visitor reopens DIRECT-JOB-01, including after the job closes | Unknown or returning, explicitly seeded | Link -> JOB-01 or useful closed-job state -> sensible recovery | A-005, A-009, A-011 |
| J-CAREERS-CENTRE | Returning Alex starts on careers and checks for updates | Simulated signed-in Alex | Careers -> bell/notification -> centre -> relevant application/task -> return | A-006, A-008, A-011 |
| J-STAFF-TASK | Priya or Sam follows a hiring-task message | Assigned staff member; session explicitly seeded | Message -> assigned candidate/task -> completion; related centre item reflects the agreed state | A-007, A-008, A-009, A-010 |

## S's handoff for each selected journey

Record: persona and stage; J-/A-IDs; source artifact; subject/event/notification
references; initial URL and identity; intended landing and CTA destination; happy
path, stale/closed/unauthorized path and return; reset instructions; exact commit
and served URL; assumption status and unresolved choices. Map design IDs to
implemented fixture IDs/routes. L uses that handoff to design independent tasks
and evidence records; reviewers receive only the task and visible source artifact.

Product choices stay in [product.md](../../product.md). Review evidence goes in
[the review package](../../../../specs/001-notification-centre/reviews/README.md).
