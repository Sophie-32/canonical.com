# Careers notification centre: product

Status: **initial prototype built; design rules remain draft.** Implementation
was pulled from the fork's `notification-centre` branch at `9d0155cd` on
2026-10-29; `prototype` pointed to the same commit. The static experience lives
in `docs/`. See the [build notes](user-flows/notification-centre/steps/step-01-build-persona-notification-centre.md).

## Goal

One notification centre on canonical.com/careers whose content depends on **who is signed in** and **what they are allowed to see**. It points people at the next hiring action; it is not a workspace.

## Personas (fictional, switchable in the demo)

S owns persona/journey development. Begin with the
[assumption register](assumptions.md) and
[email, LinkedIn and direct-link context seeds](user-flows/notification-centre/entry-contexts.md).
These distinguish entry source, session/identity, source message, subject, related
notification and the destination the person expects. L owns the linked evaluation record.

| Persona | Role (schema) | Cares about |
| :-- | :-- | :-- |
| Alex Morgan, jobseeker | `jobseeker` | Their applications, matching vacancies, saved searches |
| Priya Nair, hiring manager, Ubuntu Foundations | `hiring-manager` | Candidates awaiting her review for her vacancies |
| Sam Okafor, recruiter | `recruiter` | Overdue feedback, stalled candidates, hiring tasks |

## Scope of the prototype

- Persona switcher (demo-only control, clearly labelled, not part of the product).
- Bell in the global nav with a per-persona unread count, linking to `/careers/notifications/`.
- Notification centre page: filtered list, unread state, task state, deep links to a next action.
- Targets, links and data are fictional; no backend. State is held in `localStorage` per persona.

Out of scope: real authentication, email/webhook/PagerDuty delivery, digest scheduling, preferences UI, individual job postings beyond a few static targets.

## Decisions

| # | Decision | Why |
| :-- | :-- | :-- |
| D1 | Adapt the enterprise notification schema (DE100, "Enterprise notification schema guidelines") rather than invent a new one | Reuse; keeps careers consistent with other Canonical products |
| D2 | **Read** and **task done** are separate states | Reading is an interruption being seen; resolving is the work being done. Matches schema `delivery_log` (`read`, `resolved`) and `actionable` |
| D3 | `actionable` is shared across a role: if one recruiter resolves a task, others see it as done | Schema "multi-player" rule; avoids duplicated effort |
| D4 | Notifications address **roles**, resolved to people at send time | Schema Recipients; people change roles more often than events change |
| D5 | Never show raw `impact` integers; map to careers terms | Schema rule |
| D6 | Primary action says *where* (e.g. "Review candidate"), not *how* | Schema action guidance |
| D7 | Persona switcher is demo scaffolding, not a design proposal | Avoids implying users switch identity |
| D8 | Work happens on branch `notification-centre` (a `prototype/…` name collides with the existing `prototype` branch) | Git ref hierarchy |

D8 records the original implementation branch choice. Workshop coordination now
uses separate experience and evidence branches under the
[ownership and handoff agreement](../../docs/workshop.md). `origin` names only
`Sophie-32/canonical.com`; Canonical upstream is not configured as a remote.
The original product choices above are preserved, including any differences from
the [draft acceptance proposal](../../specs/001-notification-centre/spec.md).
Adopted product decisions stay here; walkthrough evidence and dispositions live
in [the linked review package](../../specs/001-notification-centre/reviews/README.md).

## Open questions

1. Is `event_type` allowed to extend beyond the DE100 enum for careers (we use `custom` plus a `careers_event` sub-type)?
2. Should a hiring manager ever see applicant data beyond their own vacancies? Prototype assumes no.
3. Does a jobseeker need `severity` at all? Prototype keeps it internal and shows no badge for INFO.

## Related

[Design system notes](design.md) · [Component spec](components/notification-centre.md) · [User flow overview](user-flows/notification-centre/overview.md) · [Validation plan](user-flows/notification-centre/validation.md)
