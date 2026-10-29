# Design system notes

Source of truth: Vanilla framework as shipped in `docs/static/css/styles.css` (copied from canonical.com). Pragma CLI alignment is **pending**: `@canonical/pragma-cli` (v0.44.0 on npm) has not been installed or queried yet. Update this file after querying components and tokens.

## Components in use

| Need | Vanilla pattern | Notes |
| :-- | :-- | :-- |
| Notification row | `p-notification--information / --positive / --caution / --negative`, `is-borderless` | Colour follows severity (see mapping) |
| Filter | `p-segmented-control` | Persona-specific filter set |
| List | `p-list--divided` | One notification per item |
| Bell in nav | Inline SVG in `p-navigation__link` | Vanilla has no bell icon in this build; flagged for a design-system request |
| Unread count | Custom badge (inline style) | Should become a Vanilla `p-badge` variant |
| Layout | `row--25-75-on-large`, `p-section`, breadcrumbs | Matches careers pages |

## Severity mapping (careers)

| Schema severity | Careers meaning | Pattern |
| :-- | :-- | :-- |
| INFO | Informational: new matches, received | `information` |
| MEDIUM | Time-sensitive: draft closing, feedback due | `caution` |
| HIGH | Blocked work: candidate waiting on you, feedback overdue | `negative` |
| CRITICAL | Not used in careers prototype | n/a |
| Positive outcome (application progressed) | INFO + success styling | `positive` |

## Impact mapping (never render the integer)

| Impact | Careers term | Example |
| :-- | :-- | :-- |
| 1 | Single application / candidate | One candidate needs review |
| 2 | Vacancy | 3 candidates waiting on one role |
| 3 | Team / department | Engineering has 9 overdue feedback tasks |
| 4 | All of careers | Hiring process change |

## Visual language

Light theme, 1rem fixed-width grid, Ubuntu sans type as on canonical.com. Unread items get a 4px green leading bar; resolved items are greyed with a "Done" label.

## Related

[Product](product.md) · [Component spec](components/notification-centre.md)
