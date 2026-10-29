# Validation: participant workshop handoff

The evaluation owner uses Copilot to launch independent Gemini, Claude and GPT
walkthroughs of the experience owner's agreed prototype revision. The
[workshop agreement](../../../../docs/workshop.md) defines file ownership, fixture
handoff and branches; the [review protocol](../../../../specs/001-notification-centre/reviews/README.md)
defines the model/persona matrix, evidence and triage. This is the ready foundation
for participant sessions, not a deferred-work item or a completed review.

The three jobseeker variants below preserve the original validation brief as
scenario inputs. The complete review matrix also covers hiring managers and
recruiters. Agents provide simulated evaluation; human evidence is recorded separately.

## Agent personas

| Agent | Background | Goal |
| :-- | :-- | :-- |
| A: returning applicant | Applied last week, expects news | Find out what happened to the application |
| B: browsing seeker | No applications, saved a search | Find new matching roles |
| C: anxious deadline-driven applicant | Has an unfinished draft | Not miss a deadline |

## Tasks

1. Find where notifications live from the careers home page.
2. Say how many unread notifications there are and which matter most.
3. Open a notification and reach its linked page.
4. Distinguish "I have read this" from "this needs me to do something".
5. Find all notifications about one particular application.
6. Report anything confusing, missing, or that should not be visible to a jobseeker.

## Rules for agents

- Use only the public demo URL, in a browser; no reading source or `.kb/`.
- Think aloud; record each step, where they hesitated, and what they expected.
- Do not sign in to anything; the demo has no real accounts.

## Success criteria

| Criterion | Target |
| :-- | :-- |
| Find the bell and open the centre | 3 of 3 |
| Correctly state unread vs needs-action | 3 of 3 |
| Reach the linked page from a notification | 3 of 3 |
| See no hiring-side notifications as a jobseeker | 3 of 3 |
| Report confusion on read vs done | 0 serious |

## Output

Use one durable run record per independent walkthrough under
[`specs/001-notification-centre/reviews/`](../../../../specs/001-notification-centre/reviews/README.md),
using its template and findings index. This supersedes the original proposed
`user-flows/notification-centre/findings/` output path so there is one evidence
home. Link adopted product choices to [product.md](../../product.md), accepted
fixes to their specs/change commits, and verification to the original-task retest.

Back to [overview](overview.md).
