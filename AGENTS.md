# Daily Learning workspace instructions

This file governs the entire `Daily Learning` folder.

## Purpose

Maintain a calm, factual, cumulative learning program for one adult learner who:

- is rebuilding a daily study habit;
- currently finds sustained focus and memorization difficult;
- wants broader knowledge, stronger productivity, clearer communication, and deeper IT knowledge;
- prefers short explanations, concrete examples, and frequent low-pressure review;
- wants changing facts checked online against current, authoritative sources.

The program is educational. It must never diagnose or claim to treat memory or cognitive concerns.

## Read before every run

Before creating or changing anything, read these files in order:

1. `AGENTS.md`
2. `GUIDE.md`
3. `CONTEXT.md`
4. `MEMORY.md`
5. The most recent lesson HTML file
6. Any lessons whose reviews are due or overdue

Also check the day's run-log entries in `CONTEXT.md` / `MEMORY.md` to determine whether this is the **AM** or **PM** run for today. Do not duplicate work.

## Twice-Daily Schedule

### Morning Run

1. Determine today's date in `Asia/Kathmandu`.
2. Check `MEMORY.md` / `CONTEXT.md` for reviews due today or overdue.
3. Research and create **exactly one new lesson** HTML file in the correct topic folder (follow the adaptive-difficulty / Level rules in `GUIDE.md` and current state in `CONTEXT.md`).
4. If any reviews are due or overdue, create (or update) one dated review HTML file in `08_Reviews/` covering them.
5. Research and post the **morning tech-news brief** (last ~12–24 h, prioritize overnight developments). Save as `tech-news/YYYY-MM-DD-AM.html` and link from `index.html` / `CONTEXT.md`.
6. Update `index.html`, `CONTEXT.md`, and `MEMORY.md`, tagging the run-log entry **AM**.
7. Verify links, lesson numbering, source URLs, review dates, keyboard interaction, and mobile layout.
8. Leave a concise completion note naming the new lesson, any review file, and the AM tech brief.

### Evening Run (before sleep)

1. Re-read `CONTEXT.md` / `MEMORY.md` first to confirm what the morning run already did. **Do not create a second new lesson.**
2. Do a light reinforcement pass on the morning's lesson:
   - Append a short recap / quiz (2–4 quick questions with revealable answers) to that lesson's HTML, or fill the existing "quick recap" / Q&A slot if the template already provides one.
   - This is not a whole new file.
3. If any new reviews became due since morning (rare, but possible with +1-day items), fold them into the review file; otherwise skip review creation.
4. Research and post the **evening tech-news brief** (later-breaking items from the day, distinct from the morning ones — check for overlap before adding). Save as `tech-news/YYYY-MM-DD-PM.html`.
5. Update `index.html`, `CONTEXT.md`, and `MEMORY.md`, tagging the run-log entry **PM**.

### Guardrails for the split

- Before doing anything, check the day's run-log in `CONTEXT.md` / `MEMORY.md` so a manually-triggered extra run does not duplicate work.
- Tech-news entries are timestamped (date + AM/PM) so the home page shows a clean twice-daily trail rather than ambiguous duplicates.
- If the AM run was missed entirely, the PM run should catch up: create the day's lesson and reviews **and** still do a lighter evening reinforcement pass, but clearly flag in the run log that this was a "catch-up" run.
- Never mark anything completed without learner confirmation — this applies independently to each run.

### What each file is for (rule of thumb)

- Routine facts (today's lesson, today's review, today's news) → append/update in `CONTEXT.md` run log (and the relevant review/lesson files).
- Durable facts about the learner (preferences, mastery, patterns) → `MEMORY.md`.
- Process / template facts → `GUIDE.md` (confirmed before changing; rare).
- Core agent behavior → `AGENTS.md` (confirmed before changing; rare). Never rewrite this file silently.

Beyond just appending the day's entries, each run should check whether the `.md` files need structural updates:

- `CONTEXT.md` — update if the rotation position changes, a topic's mastery level changes, the review queue shape changes (items added/cleared), or the AM/PM run-log format itself needs a new field.
- `MEMORY.md` — update if learner feedback implies a preference change, a topic crosses a mastery threshold, or a long-term pattern emerges.
- `GUIDE.md` — update only if the process itself changed (new section in the lesson template, new folder such as `tech-news/`, etc.). Flag explicitly in the run log.
- `AGENTS.md` — treat as near-static; only touch after explicit learner confirmation.

## Content rules

- Separate verified facts from forecasts, estimates, interpretations, and opinions.
- For changing information, prefer sources published or updated recently and state the checked date.
- For technical topics, prioritize standards, official documentation, original research, and maintainers' documentation.
- For health, legal, or financial topics, use authoritative sources and include appropriate limitations.
- Never use a statistic without a direct source.
- Do not copy long passages. Explain in original language and link to sources.
- If reliable sources disagree, explain the disagreement plainly.

## Lesson rules

Every lesson must:

- target 10 to 15 minutes;
- teach one central idea and no more than three supporting ideas;
- begin with a one-sentence outcome;
- connect to a real situation;
- use one consistent analogy when an analogy helps;
- include one worked example and one small action;
- define unfamiliar terms where they first appear;
- include a short recap and Q&A at the end;
- contain three to five recall questions with answer explanations;
- show source names, direct links, publication/update dates where available, and the date checked;
- calculate review dates for +1, +3, +7, and +21 days;
- work without an internet connection except for opening source links.

Do not overload the page with decorative motion, long paragraphs, or unnecessary terminology.

## Tech-news rules

- Create a `tech-news/` folder if it does not exist.
- All tech-news briefs are **HTML only** (same calm visual language as lessons and the home page).
- Morning brief: last ~12–24 h, prioritize overnight / Asia-time developments. File: `tech-news/YYYY-MM-DD-AM.html`.
- Evening brief: later-breaking items from the same calendar day, explicitly non-overlapping with the morning brief. File: `tech-news/YYYY-MM-DD-PM.html`.
- Keep each brief short (4–8 bullets). Prefer primary sources, official blogs, and established tech reporting. State the approximate window covered and the date checked.
- Every brief page must be keyboard-accessible, mobile-friendly, and free of external scripts, analytics, or third-party fonts.
- Link the latest AM/PM briefs from `index.html` and note them in the `CONTEXT.md` run log.

## File and naming rules

- Lesson IDs are permanent: `ITF-001`, `PC-001`, `AI-001`, `BE-001`, `SCT-001`, `SHA-001`, or `PP-001`.
- Lesson filenames use `ID_YYYY-MM-DD_short-title.html`.
- Review filenames use `REVIEW_YYYY-MM-DD.html`.
- Tech-news filenames use `YYYY-MM-DD-AM.html` or `YYYY-MM-DD-PM.html` inside `tech-news/`.
- Never rename or overwrite a completed lesson. Create the next numbered file.
- Keep each lesson's facts and questions inside its HTML file.
- Treat `MEMORY.md` as the chronological learning ledger.
- Treat `CONTEXT.md` as the current snapshot and next-action pointer.
- Treat `GUIDE.md` as the teaching and quality standard.

## Topic rotation

Use this seven-step rotation unless due reviews or learner feedback justify a documented adjustment:

1. IT Foundations
2. Productivity and Communication
3. AI, Data, and Modern Tech
4. Business and Economics
5. Science and Critical Thinking
6. Society, History, and Current Affairs
7. Practical Project and weekly synthesis

Return to step 1 after step 7. `CONTEXT.md` stores the next rotation step.

## Progress and review rules

- Schedule every lesson at +1, +3, +7, and +21 calendar days.
- Use recall before showing answers.
- A daily review file may combine several lessons, but each lesson must retain a separate score area.
- Record review status as `pending`, `prepared`, `completed`, `missed`, or `rescheduled`.
- Do not claim a review was completed unless the learner or a saved result confirms it.
- If a lesson is repeatedly difficult, simplify the explanation and add a new example; do not merely repeat the same wording.

## HTML quality

- Use semantic HTML, visible keyboard focus, labelled controls, and sufficient color contrast.
- Support small phones and desktop screens without horizontal scrolling.
- Respect `prefers-reduced-motion`.
- Use the shared files in `00_Templates/` unless a lesson requires a documented exception.
- Keep interactive state in browser `localStorage` under a key containing the lesson ID.
- Do not require an account, external script, analytics, tracking, or third-party font.
