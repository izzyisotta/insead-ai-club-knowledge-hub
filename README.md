# INSEAD Claude Code — site mockup

A clickable mockup of what an INSEAD Claude Code knowledge-sharing site could look like. **Nothing here is wired up.** It's static HTML to give a feel for the structure, layout, and content types before committing to a real build.

## Live preview

[View the demo →](https://izzyisotta.github.io/insead-claude-code-demo/)

## What this is for

The INSEAD Claude Code group chat keeps producing good content (workflows, skill files, prompting tips, vibecoded tools) that scrolls away. This mockup is the answer to the question "what would a shared place for that look like?"

It's a walkthrough, not a product. Open it, click around, decide whether the structure works before anyone writes real backend code.

## What to look at

- **`index.html`** — landing page. Categories, recent posts, tools, contributors.
- **`category-*.html`** — four category landing pages (one per top-level).
- **`people-*.html`** — four contributor pages, each with their own posts.
- **`post-*.html`** — eight full post pages with comments threads.
- **`new-post.html`** — what submitting a new post looks like.
- **`login.html`** — sign-in screen (Google + magic link).

## Categories

Goal-oriented, not topic-oriented:

- **INSEAD Workflows** — automating school stuff (Canvas, lectures, study admin)
- **Building Apps** — vibecoded tools and side projects
- **Agents & Iteration** — multi-agent setups, evaluate loops, prompting, debugging
- **General Config** — MCPs, hooks, plugins, settings

## Design

- Magazine-style layout, generous whitespace
- Light/dark mode toggle (top-right, persists in localStorage)
- Cards for browse, narrow-column reading for post pages
- Comments shown on every post (threaded, lightweight)
- Tool links rendered as cards with a "Visit" button instead of full posts

## What's not in the mockup

- Search
- File downloads (skill .zip attachments are visual only)
- Real auth or user accounts
- Edit/delete on posts
- Notifications, follows, likes

These are deliberate omissions. The mockup answers "what would the basic browse and post experience look like" — everything else is a Phase 2 question.

## If we build it for real

Two paths:

1. **Notion team workspace** — zero build, zero maintenance, accessible to non-technical contributors. Lose: portability, distinctiveness.
2. **Next.js + Supabase** — what this mockup would become. Auth, uploads, comments, DB. Closer to ~2 days of work to get to alpha.

The mockup is meant to make that decision concrete: if this is roughly what we want, the trade-off between Notion and a real build becomes a clearer call.
