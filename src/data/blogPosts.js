export const blogPosts = [
  {
    slug: "learning-in-public",
    title: "Learning in Public as a Software Engineer",
    excerpt:
      "Why writing about what you learn compounds faster than keeping notes private - and how I structure posts so they stay useful later.",
    category: "Learning",
    date: "2026-03-12",
    readTime: "6 min",
    content: `
## Why write while you learn

Most of what I retain from a hard week of engineering is not the code itself - it is the decision trail. Writing forces that trail into language. Ambiguous ideas become sharper, and half-understood concepts reveal themselves when they refuse to fit into a clear sentence.

I treat posts as working notes first. If a topic is messy, that is fine. The goal is honesty about where I am, not a polished tutorial that pretends I always knew the answer.

## A simple cadence

I keep three buckets: **learning**, **experience**, and **lifestyle**. Learning posts capture techniques and mental models. Experience posts cover shipping, collaboration, and mistakes. Lifestyle posts protect the human side of the work - focus, rest, and the rituals that keep me building.

A short weekly draft beats an ambitious monthly essay that never ships.

## What I leave out

I skip performative hustle. I also skip rewriting documentation that already exists elsewhere. If I cannot add a lived angle - a failed approach, a tradeoff, a surprise - I wait until I can.
    `.trim(),
  },
  {
    slug: "shipping-small",
    title: "Shipping Small: How Tiny Releases Changed My Pace",
    excerpt:
      "Breaking work into thin vertical slices reduced anxiety and improved feedback. Here is the process I use on personal and team projects.",
    category: "Experience",
    date: "2026-02-28",
    readTime: "5 min",
    content: `
## The problem with big batches

Large features feel productive while they are in progress and terrifying at the end. Reviewers struggle, regressions hide, and motivation dips because the finish line keeps moving.

I started designing every change so it could land behind a flag, an unfinished UI path, or a narrowly scoped API. Progress became continuous instead of episodic.

## A practical slice

1. Define the smallest user-visible outcome.
2. Implement the thinnest path end to end.
3. Soften edges with stubs only where necessary.
4. Ship, observe, then widen.

This rhythm also improves how I write commit messages and pull requests - each one tells a complete story.

## What improved

Feedback arrived earlier. Debugging stayed local. And personally, the day felt less like a treadmill and more like a sequence of finishes.
    `.trim(),
  },
  {
    slug: "evenings-offline",
    title: "Evenings Offline: Protecting Deep Work After Hours",
    excerpt:
      "A few lifestyle rules that keep evenings restorative without abandoning growth - walks, paper notes, and deliberate offline blocks.",
    category: "Lifestyle",
    date: "2026-02-10",
    readTime: "4 min",
    content: `
## Growth needs recovery

Software engineering rewards curiosity, but curiosity without recovery turns into noise. I noticed that late-night scrolling through docs made me feel busy while quietly exhausting the same attention I needed the next morning.

So I built a lighter evening system.

## What I actually do

- One short walk without headphones after dinner.
- Paper notes for ideas that arrive after work - capture, do not execute.
- A hard offline window most nights, even if it is only ninety minutes.

The point is not purity. The point is making rest intentional instead of accidental.

## The engineering benefit

I return sharper. Hard problems feel less sticky. And the blog stays sustainable because writing does not compete with an always-on feed of inputs.
    `.trim(),
  },
  {
    slug: "reading-codebases",
    title: "How I Read Unfamiliar Codebases",
    excerpt:
      "A field guide for joining a new repo: entry points, data flow, ownership signals, and the questions that unlock orientation fast.",
    category: "Learning",
    date: "2026-01-22",
    readTime: "7 min",
    content: `
## Start from the edges

I no longer begin in the middle of a domain folder. I start at the edges: routes, jobs, CLIs, event handlers. Anything that accepts input from the outside world tells me how the system is intended to be used.

From there I follow one request or one event all the way through.

## Ownership signals

READMEs help, but ownership often lives in quieter places: folder naming, test structure, CODEOWNERS, and the age of files that still get touched. Fresh files near old cores usually mark active seams.

## Questions I always ask

- What is the source of truth for this data?
- What fails loudly versus silently?
- Where are the boundaries between sync and async work?
- What would a junior teammate change by accident?

Those questions turn browsing into orientation.
    `.trim(),
  },
]

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug)
}
