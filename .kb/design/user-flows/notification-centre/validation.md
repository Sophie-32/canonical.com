# Validation plan: three agent jobseekers

Three agents act as different jobseekers and try the deployed prototype. Findings feed the next iteration. Agents are a cheap first pass; they do not replace sessions with real users.

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

One findings file per agent under `user-flows/notification-centre/findings/`, then a consolidated list of changes recorded in [product.md](../../product.md) as decisions.

Back to [overview](overview.md).
