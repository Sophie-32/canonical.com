# Notification-centre decision record

Created 2026-10-29. This file records choices and their reasons; the
[spec](spec.md) records intended behaviour and the [reviews](reviews/README.md)
record evidence. Git preserves revisions. No walkthrough is recorded in this
package. Product/design decisions have their authoritative home in the colleague's
[product notes](../../.kb/design/product.md); this record owns workshop process
choices and links proposed product changes to that source. D-002 and D-003 were
drafted before the colleague's implementation was pulled and remain proposals,
not replacements for its recorded decisions.

## Sources

- Owner conversation on 2026-10-29: fork-only prototype, three audiences,
  careers entry to centre, independent model walkthroughs and iterative specs.
- Supplied Miro screenshot: add context, build on patterns, validate, iterate,
  preserve shared rules and decisions, and contribute the prototype.
- [Enterprise notification schema, pending review](https://gist.github.com/hartmutobendorf/d135c445816d0a2a87cc6d363450096c):
  audience targeting, action links, independent personal read/shared resolution state.
- [Design knowledge-base prompt](https://gist.github.com/hartmutobendorf/e541611b5bf5afe0221a18b3b89168c5):
  preserve product reasoning, design guidance and user flows. This package keeps
  those records together and is discoverable through the shared spec catalog.
- [Prototype publishing skill](https://github.com/canonical/prototype-skill):
  later catalog/hosting workflow; not invoked by this package or by a fork push.
- Repository inspection and pull on 2026-10-29: `origin/notification-centre`
  and `origin/prototype` pointed to `9d0155cd`, which includes the persona-driven
  centre, workspace previews and `.kb/design` notes. This supersedes the earlier
  inspection of `65cd2971`, which only had the job-match banner.

## D-001 - Publish source to the owner's fork

**Status**: owner requirement. **Date**: 2026-10-29.
**Choice**: Push only to Sophie-32's fork. The initial local branch was
`prototype/notification-centre`; D-006 records the workshop branch and remote update.
**Reason**: Explicit owner instruction.
**Alternative**: Upstream contribution is outside authorization.
**Consequence**: Initially the `fork` remote was the default and upstream pushes
were disabled. D-006 supersedes that setup by removing upstream entirely.

## D-002 - Start with a complete simulated jobseeker journey

**Status**: proposed MVP default, pending CP1. **Date**: 2026-10-29.
**Choice**: Careers entry, selected message, meaningful action, destination preview
and return path; extend the same model to hiring manager and recruiter.
**Reason**: A complete journey lets reviewers judge the value and handoff, beyond
the appearance of an inbox. Synthetic identity/data keep the first iteration bounded.
**Alternatives**: A static centre alone misses the entry/handoff; production
recruitment integration adds dependencies before the interaction is understood.
**Consequence**: No real account, application or recruitment system is contacted.
Revisit when testing exposes a dependency that changes the experience.

## D-003 - Adapt the schema to careers

**Status**: proposed design rule, pending CP1. **Date**: 2026-10-29.
**Choice**: Reuse audience, message, action and shared completion concepts; keep
personal read state separate. Do not introduce incident severity/blast-radius UI.
**Reason**: The referenced schema concerns enterprise operations; its event and
product examples do not define careers requirements. Role alone also cannot
identify which candidate/application someone should see.
**Alternative**: Directly copy the enterprise taxonomy or show every event to a role.
**Consequence**: Fixtures and domain events must express ownership/assignment.

## D-004 - Keep evidence before creating fix specifications

**Status**: proposed refinement of the owner's review loop, pending CP1.
**Date**: 2026-10-29.
**Choice**: Record all stumbles, then reproduce, deduplicate and decide whether
each needs a new spec, a bug fix, more investigation, deferral or rejection.
**Reason**: Multiple reviewers may report the same issue; a complaint is evidence
to investigate rather than automatic authorization for a product change.
**Alternative**: Create one new spec for every observation regardless of duplication.
**Consequence**: Every observation retains an ID, disposition and rationale; accepted
work links through implementation and retest. Rejected ideas remain part of the record.

## D-005 - Treat model walkthroughs as simulated reviews

**Status**: proposed validation rule, pending CP1. **Date**: 2026-10-29.
**Choice**: Use genuine model identities, independent sessions, neutral tasks,
reset fixtures and actual browser evidence. Separately collect human walkthroughs.
**Reason**: Model agreement or disagreement alone does not demonstrate human usability.
**Alternative**: Treat model commentary or source inspection as observed user behaviour.
**Consequence**: Record the actual model and browser capability selected in
Copilot. The owner's 2026-10-29 clarification establishes Copilot as the model
review harness; CLI absence in this checkout is not an execution blocker.

## D-006 - Separate the experience lane from evaluation and evidence

**Status**: foundation arrangement documented from owner intent; product policy
acceptance remains under CP1. **Date**: 2026-10-29.
**Choice**: Preserve the colleague's `notification-centre` implementation and
journey/design ownership. Use `workshop/evidence-foundations` for shared setup,
evaluation specifications, review protocol and records. Publish foundation changes
on that fork branch for integration by the experience owner. Each participant
uses a separate checkout and branch; reviewers test a pinned revision.
**Reason**: The data, persona behaviour and UI share one script, so splitting
personas or data versus rendering creates overlapping edits. A producer/evaluator
split allows independent harnesses to work concurrently and keeps a useful critique.
**Alternative**: Both people edit the centre or maintain parallel product specs.
**Consequence**: [File ownership and handoff](../../docs/workshop.md) define who
edits what; `.kb/design` holds product decisions and this package holds evidence
and process records, connected by links. Every finding keeps its disposition.

The owner also selected the safer remote arrangement: remove Canonical upstream
and rename the fork to `origin`. Only `https://github.com/Sophie-32/canonical.com`
is configured for fetch/push. This supersedes D-001's original remote naming.
The foundation session records preparation as complete; actual workshop journeys
belong to the participant sessions and are not deferred-work tickets.

## Adding a decision

Record a stable ID, date, status/decision-maker, question, evidence links,
alternatives, chosen option, reason and consequences. After implementation, link
the change/revision and original-task retest. Supersede old decisions explicitly;
do not erase the reasoning. Shared naming/component rules belong here until a
cross-feature design guide is warranted.
