---
name: prompt-kit
description: Reusable prompt components for React apps. Batteries included.
tags: ["React", "TypeScript"]
github: https://github.com
year: "2024"
---

Building LLM-powered interfaces involves a lot of repetitive UI work: chat bubbles, streaming text, tool call displays, token counters. prompt-kit extracts those patterns into composable components so you don't rebuild them every project.

## What's in the kit

- **`<ChatThread />`** — renders a message history with role-based styling
- **`<StreamingText />`** — handles character-by-character streaming with a cursor
- **`<PromptInput />`** — a textarea that grows with content, with submit-on-enter
- **`<ToolCallCard />`** — displays structured tool calls and their results

All components are unstyled by default and accept a `className` prop, so they drop into any design system.

## Why composable

The early version was a monolithic `<ChatUI />` component that tried to handle everything. It was inflexible — every project had slightly different requirements and the prop API became unwieldy.

Splitting into single-responsibility components made each one easier to test and easier to swap out. You can use `<StreamingText />` alone without pulling in the rest.

## What's next

The main gap is accessibility — focus management, ARIA live regions for streaming output, keyboard navigation. That's the area I'd invest in before recommending it for production use.
