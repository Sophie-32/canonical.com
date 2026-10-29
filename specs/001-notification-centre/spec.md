# Feature specification: Careers notification centre MVP

**Feature branch**: `workshop/l-evaluation-records`
**Created**: 2026-10-29
**Lifecycle**: draft
**Scope**: `001-notification-centre/spec-r3`
**Superseded tasks**: none.

<a id="checkpoints"></a>
**Checkpoints**:

| ID | Gate | Verdict link | State |
|---|---|---|---|
| CP1 | Owner specification acceptance | [request](reviews/CP1-request.md) | pending |

**Input**: Iterate on the notification-centre prototype in Sophie-32's fork.
A jobseeker, hiring manager or recruiter arrives from an explicitly defined
entry context, understands the relevant update and reaches the right next step.
The original careers-page -> centre path is one journey alongside email,
LinkedIn and direct job-link arrivals; identity/session must be stated for each.
Independent Gemini, Claude and GPT walkthroughs, launched through the owner's
Copilot harness, seed evidence-backed iterations and a durable record of decisions.
The current session establishes foundations; the participant sessions own journey
development and review execution under the [workshop split](../../docs/workshop.md).
S owns personas, assumptions and journeys on `workshop/s-journeys-personas`;
L owns this evaluation/specification package on `workshop/l-evaluation-records`.

## Purpose and scope

Help someone answer: what changed, why does it concern me, and what do I do next?
The colleague's existing implementation was pulled at `9d0155cd` from
`origin/notification-centre`: static careers pages, persona-driven notification
centre, synthetic state and workspace previews. Their
[journeys](../../.kb/design/user-flows/notification-centre/overview.md) and
[design decisions](../../.kb/design/product.md) are the experience baseline.
This draft is the acceptance proposal; it does not erase or retroactively accept
that work. [Baseline differences](reviews/baseline.md) record known discrepancies.

The first end-to-end slice is the jobseeker journey; the same centre then supports
staff personas. Identity, events and destination workspaces are simulated and
clearly labelled as a prototype. The exact routes and rendering approach belong
in the implementation plan.

Included: careers-page entry, notification centre, role-appropriate examples,
message details, linked destination previews, unread state, empty/unavailable
states, accessible navigation, and repeatable demo reset.
S's [assumption register](../../.kb/design/assumptions.md) and
[entry-context seeds](../../.kb/design/user-flows/notification-centre/entry-contexts.md)
define the source messages, subjects and expected destinations to flesh out
before selecting review tasks. These are explicit hypotheses, not inferred user research.

Excluded: production authentication/authorization, live recruitment records,
real email or push delivery, routing infrastructure, admin audit dashboards, automated
hiring decisions, and a cross-product notification platform.
Synthetic email/post artifacts and links may model those entry contexts without
sending messages, accessing real accounts or claiming an existing implementation.

## User scenarios and testing

For each selected journey S supplies its J-/A-IDs, persona/lifecycle, source
message or link, subject/event/notification references, initial session and landing
destination. L derives neutral review tasks from that handoff. The scenarios
below describe the original centre flow; external entry scenarios must preserve
their own destination contract and must not automatically detour through it.

### User story 1 - Understand an application update (Priority: P1)

As a jobseeker, I want to find an application update from the careers page and
understand its meaning and next step.

**Why this priority**: This is the entry-to-centre journey requested by the owner.
**Independent test**: Use the jobseeker fixture from the careers page, open its
application notification, explain the update, visit its application preview and
return to the centre.

**Acceptance scenarios**:

1. **Given** a simulated signed-in jobseeker with an unread update, **when** the
   careers page opens, **then** a labelled notification entry and unread count
   are available without changing the public careers content.
2. **Given** a careers-page preview of that update, **when** it is activated,
   **then** the notification centre opens with the matching message selected.
3. **Given** that message, **when** it is opened, **then** the job title, relevant
   application, date, plain-language change and primary next action are clear;
   its read state changes for this person only.
4. **Given** the primary action, **when** it is activated, **then** the matching
   simulated application opens with a working route back to the centre. Opening
   the message does not complete the application task.

### User story 2 - Follow the right hiring task (Priority: P2)

As a hiring manager or recruiter, I want updates about work assigned to me and a
clear link to the relevant candidate or vacancy.

**Why this priority**: It tests whether one interaction model serves different
audiences without exposing unrelated information.
**Independent test**: Repeat the full journey with each staff fixture and an
unrelated fixture record that must never appear in its feed.

**Acceptance scenarios**:

1. **Given** a hiring manager assigned to a vacancy, **when** the centre opens,
   **then** it includes a candidate-review request for that vacancy and excludes
   candidates from unrelated vacancies.
2. **Given** a recruiter assigned to a hiring pipeline, **when** an overdue
   feedback notification is opened, **then** its context and action lead to the
   corresponding pipeline preview.
3. **Given** two staff recipients of the same task, **when** simulated completion
   occurs in the destination, **then** both see that it no longer needs action;
   their personal read states remain independent.

### User story 3 - Stay oriented and recover (Priority: P2)

As any persona, I want to distinguish unread messages from outstanding work and
recover when there is nothing to show or a destination is unavailable.

**Independent test**: Open the all/unread views, empty feed and unavailable-item
fixtures using keyboard navigation and a narrow viewport.

**Acceptance scenarios**:

1. **Given** unread messages, **when** the centre is merely listed, **then** they
   remain unread; opening a message or explicitly marking it read updates the
   visible count consistently on the careers page and in the centre.
2. **Given** an empty feed or unread filter, **when** it is shown, **then** the
   page explains that state and provides navigation back to all messages or careers.
3. **Given** a completed task or unavailable destination, **when** its old
   notification is opened, **then** its status and recovery path are explained
   without a misleading active action or a broken link.

### Edge cases

- Switching demo identity resets the active message and never carries another
  identity's feed, count or personal state into the new view.
- A direct link to an item outside the active identity's fixture scope shows a
  neutral unavailable state without revealing the other person's data.
- Returning from a destination preserves useful list context; browser back and
  refresh work for the supported prototype URLs.
- A signed-out demo state shows no personal notification count or messages.
- Long titles and narrow screens retain readable content and usable actions.
- An email opened in a fresh session, forwarded link or closed job must preserve
  subject context and explain any identity/unavailable boundary. The appropriate
  simulated behaviour is selected through S's assumption/journey work.

## Requirements

### Functional requirements

- **FR-001**: The prototype MUST expose a labelled demo identity selector with
  jobseeker, hiring manager, recruiter and signed-out states.
- **FR-002**: A signed-in careers page MUST provide a notification-centre entry
  and unread count; a specific notification preview MUST open its matching item
  in the centre. The generic entry MUST open the list.
- **FR-003**: The centre MUST show newest-first messages with title, date,
  relevant application/vacancy context and distinguishable read state, plus
  all/unread views and a way back to careers.
- **FR-004**: Opening a message MUST reveal its full meaning and primary action,
  where applicable. Actions MUST describe an outcome or destination and open
  matching working prototype destinations.
- **FR-005**: Personal read state MUST persist across navigation and refresh
  within a review session. Reading MUST remain separate from task completion.
- **FR-006**: Feed membership MUST use identity and application/vacancy
  relationships as well as role. A jobseeker MUST see only their own applications;
  staff MUST see only assigned fixture work. This demonstrates intended scope,
  not production security enforcement.
- **FR-007**: Shared task completion MUST remove stale actionable controls for
  all relevant simulated recipients while preserving each person's read state.
- **FR-008**: The prototype MUST include readable empty, signed-out, completed
  and unavailable states with valid recovery navigation.
- **FR-009**: Core interactions MUST work by keyboard, show focus, expose useful
  accessible names, and communicate read/action states without relying on colour.
  The primary journey MUST work at 375px and 1280px viewport widths.
- **FR-010**: Fixtures MUST be synthetic, repeatable and resettable. Each main
  persona MUST have at least one informational update and one actionable message;
  staff fixtures MUST also exercise shared completion. One identity MUST have
  no messages, and unrelated records MUST test the intended audience boundaries.
- **FR-011**: The experience MUST follow existing Canonical careers styling and
  document reusable design rules. Technical incident severity or impact numbers
  MUST NOT be added to careers messages without a demonstrated user need.
- **FR-012**: Every review MUST identify the exact prototype revision, fixture,
  task, actual reviewer/model and tool capabilities. Every reported stumble MUST
  receive a durable finding ID and a disposition under the [review protocol](reviews/README.md).
  Model runners are selected in the participant's harness; absence of a local
  standalone CLI in another harness MUST NOT be treated as unavailability.
- **FR-013**: Accepted findings MUST link to a fix specification or a scoped bug
  record, the resulting change and a retest outcome. Rejected/deferred findings
  MUST retain their rationale. No observations or successful reviews may be invented.
- **FR-014**: Source publication MUST target only
  `https://github.com/Sophie-32/canonical.com`; Canonical upstream pushes are prohibited.
- **FR-015**: Every selected inbound journey MUST record its source email/post/link,
  persona/session, subject/event, related notification if one exists, intended
  landing and next-action destination. S MUST identify the source artifacts and
  map design IDs to prototype fixtures/routes before L claims that journey was reviewed.
- **FR-016**: Where email and in-app notifications refer to the same event, their
  synthetic artifacts MUST identify the same subject and explain any changed
  destination state. A visit or external link alone MUST NOT establish verified
  identity or an application history. Unresolved channel/read-state rules stay
  explicit assumptions until a product decision is recorded.

### Key entities

- **Demo identity**: stable person ID, role and allowed application/vacancy relationships.
- **Entry context**: journey and assumption IDs, entry channel, initial identity/session,
  user intent and expected first landing.
- **Source communication**: synthetic email/post or direct-link artifact referring
  to a job/application/search/task and optional shared event; linked to the related
  notification and destination without requiring a personal notification for every visit.
- **Notification**: stable ID, event type, title, body, timestamp, subject, intended
  recipients, optional primary action and shared task state.
- **Recipient state**: notification plus person and read timestamp; separate from
  the shared task's outstanding/completed state.
- **Review finding**: evidence, expected/observed behaviour, persona, revision,
  reviewer, severity, decision, fix reference and retest reference.

## Success criteria

- **SC-001**: Each of the three main personas can complete careers entry ->
  matching message -> matching destination -> centre with no broken link and
  without entering another persona's information.
- **SC-002**: In a reset fixture, opening one unread message reduces only that
  person's unread count by one across navigation/refresh; it completes no task.
  Simulated shared completion updates both staff views independently of read state.
- **SC-003**: The primary journey is operable by keyboard at both specified
  viewport widths; empty/unavailable states provide a working recovery path.
- **SC-004**: The review matrix records one run per persona for each available
  requested model family. Unavailable model/tool combinations are explicitly
  marked blocked, never silently substituted. Each successful run locates the
  message, explains its next step and reaches its destination without hints.
- **SC-005**: Every finding has evidence and a disposition; every claimed fix has
  a linked verification against the original task. No unresolved blocking finding
  is labelled passed. Representative human walkthroughs remain separately reported.
- **SC-006**: Every selected email/LinkedIn/direct-link review is traceable to
  S's source artifact, assumption, subject and destination mapping. Its result
  distinguishes observed behaviour from an unimplemented scenario or a design hypothesis.

These are targets, not completed validation results. Agent walkthroughs provide
simulated evaluation and cannot alone establish usability for real people.
Review execution is part of the participant workshop scope, not a deferred-work
backlog or a missing foundation deliverable.

## Assumptions and decisions to confirm

The maintained register is [entry assumptions](../../.kb/design/assumptions.md),
owned by S. L links supporting/contradicting findings and requests register
updates rather than creating a competing assumption list. The scope defaults
below remain part of this acceptance proposal.

- The initial surface is careers, not every Canonical site or an enterprise admin portal.
- Simulated identity and synthetic data are sufficient for this iteration.
- The jobseeker is the first vertical slice; staff flows expand the same centre.
- Destination previews are sufficient to judge the handoff; full hiring tools
  and notification preferences can be considered after the first review.
- A full centre is the initial design hypothesis; panel versus page, labels and
  presentation remain open to evidence from walkthroughs.

Rationale, alternatives, sources and statuses live in the
[decision record](decisions.md). Owner acceptance is recorded through CP1;
these draft assumptions must not be represented as confirmed product policy.
