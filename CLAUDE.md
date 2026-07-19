# CLAUDE.md

Guidance for AI coding agents working in this repository.

## Workflow-Mode: simple-main-only

`main` is the only long-lived branch. Work happens on short-lived
`feature/*`, `bugfix/*` or `hotfix/*` branches (enforced by the
pre-commit hook via `scripts/validate-branch-name.js`) and is merged
back into `main` via pull request. There are no environment branches
and no release branches.

## Project

`hdos-date-time-actions` is a TypeScript library (work in progress) for
controlling DOM actions based on date and time. It is not yet published
to npm.

## Tooling

- Package manager: pnpm (version pinned via the `packageManager` field
  in `package.json`; Node version pinned in `.nvmrc` / `.npmrc`)
- Install: `pnpm install`
- Quality gates: `pnpm run lint`, `pnpm run build`, `pnpm run test` —
  all three must pass before pushing; CI runs the same gates
- Commits: Conventional Commits, validated by commitlint (husky
  `commit-msg` hook); `pnpm run commit` starts an interactive
  commitizen prompt
