# Step 01: persona-driven notification centre (build notes)

## What was built

| File | Role |
| :-- | :-- |
| `docs/careers/app/notifications.js` | Fictional data (3 personas, 17 notifications), state, rendering, bell count |
| `docs/careers/notifications/index.html` | Notification centre page (renders from the script) |
| `docs/careers/app/index.html?n=<id>` | Stand-in for the workspace each action opens; has "Mark task done" |
| every `docs/careers/**/index.html` | Includes the script so the nav bell shows the active persona's unread count |

## How state works

- Persona, read state (per persona) and task-done state (shared per role) live in `localStorage` under `careers-notif-v1`.
- Read is set by opening a notification or its action (D2); "Mark all as read" never changes task state.
- A task already resolved by a colleague (`doneBy`) shows "Done by {name}" and counts as read for the bell.
- Visibility: a notification is shown only if the persona's role is in `roles` and its `scope` is in the persona's entitlements.

## Decisions made while building

| # | Decision | Why |
| :-- | :-- | :-- |
| D9 | Persona switcher sits on the notifications page inside an "information" notification labelled demo-only | Keeps D7: scaffolding, not product |
| D10 | Bell count = unread and not already done | A resolved task should not nag |
| D11 | All actions open one generic workspace page | Real application, review and task pages are out of scope |
| D12 | `docs/careers/app/` not `docs/static/js/` | The repo `.gitignore` excludes build output such as `*.js`/`*.css` under static paths |

## Known gaps

Bell is an inline SVG (no Vanilla icon); no remediation options such as mute; no digest/batch; `localStorage` is per browser so two designers do not share state.

Back to [overview](../overview.md).
