---
name: ship-log
description: Public changelog generator from git commits. One command, clean output.
tags: ["Node.js"]
github: https://github.com
year: "2024"
---

Most projects don't maintain a public changelog because it's tedious. You either write it by hand or let automated tools produce noisy, low-signal output full of `chore: bump deps` entries.

ship-log is a middle path: it reads your git history and generates a clean, human-readable changelog — but gives you control over what gets included.

## How it works

You tag commits with a category prefix (`feat:`, `fix:`, `breaking:`) and ship-log groups them, formats the dates, and outputs either markdown or HTML. One command, version-aware output.

```bash
ship-log --since v1.2.0 --output CHANGELOG.md
```

## Design choices

**No config file required** — sensible defaults mean it works out of the box. You can add a `.shiplog.json` if you want to customize category labels or filter patterns, but you don't have to.

**Output, not a platform** — ship-log generates a file. It doesn't host anything or require an account. You decide where the changelog lives.

## Limitations

It works best on repositories with consistent commit message discipline. If your history is messy, the output will be too — ship-log doesn't try to infer intent from vague commit messages.
