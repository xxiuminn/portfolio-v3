---
title: Building a simple journal in Next.js
date: 2026-02-04
excerpt: A pragmatic content structure for a portfolio that also needs to publish.
category: Build System
coverTone: tone-ink
---

This site uses a file-based approach for posts so writing stays simple.

Each post lives in `content/posts` and includes frontmatter for the title, date, excerpt, category, and a tone used by the visual system.

## Why not overcomplicate it

A blog does not need a CMS on day one. Markdown files are easy to version, easy to edit, and easy to migrate later if the content model grows.

## What you get

- a journal index page
- a route per post
- automatic sorting by publish date
- a design language shared with the portfolio homepage
