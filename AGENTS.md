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

## Read before every daily run

Read these files in order before creating or changing a lesson:

1. `AGENTS.md`
2. `GUIDE.md`
3. `CONTEXT.md`
4. `MEMORY.md`
5. The most recent lesson HTML file
6. Any lessons whose reviews are due today

## Daily job

Each scheduled run must complete this sequence:

1. Determine today's date in `Asia/Kathmandu`.
2. Check `MEMORY.md` for reviews due today or overdue.
3. Research today's lesson using primary or authoritative sources.
4. Create exactly one new lesson HTML file in the correct topic folder.
5. If reviews are due, create one dated review HTML file in `08_Reviews/` covering all due lessons.
6. Update `index.html`, `CONTEXT.md`, and `MEMORY.md`.
7. Verify links, lesson numbering, source URLs, review dates, keyboard interaction, and mobile layout.
8. Leave a concise completion note naming the new lesson and any review due.

Do not silently skip a day. If current research or file creation fails, record the failure and reason in `MEMORY.md`; do not invent a lesson.

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

## File and naming rules

- Lesson IDs are permanent: `ITF-001`, `PC-001`, `AI-001`, `BE-001`, `SCT-001`, `SHA-001`, or `PP-001`.
- Lesson filenames use `ID_YYYY-MM-DD_short-title.html`.
- Review filenames use `REVIEW_YYYY-MM-DD.html`.
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

