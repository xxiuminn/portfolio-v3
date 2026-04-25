---
name: funnel.sh
description: Minimal conversion tracking you self-host in an afternoon.
tags: ["Go", "SQLite"]
github: https://github.com
year: "2025"
---

Most analytics tools are either too heavy (GA4, Segment) or too opaque about what they actually collect. I wanted something I could read top to bottom in an hour and trust completely.

## What it does

funnel.sh is a single binary that tracks conversion events — page views, signups, purchases — and stores them in SQLite on your own server. No third-party scripts, no cookies by default, no data leaving your infrastructure.

You drop in one script tag and query your own database for everything else.

## Design decisions

**SQLite over Postgres** — for the traffic volumes most indie projects see, SQLite is more than enough. It also makes the setup trivial: no separate database process to manage.

**Single binary** — the Go build compiles everything into one file. Deployment is `scp` and `systemctl enable`. No Docker, no dependencies.

**No dashboards** — funnel.sh deliberately doesn't ship a UI. Query the database directly, or pipe the output into whatever visualization tool you already use.

## What I'd change

If I were to extend it, I'd add a lightweight webhook system so you can trigger actions (Slack notifications, email alerts) when conversion thresholds are hit — without baking that logic into the core.
