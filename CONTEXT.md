# Current learning context

Last updated: 2026-07-27 (PM catch-up), Asia/Kathmandu

## Learner profile

The learner is starting from a low-study baseline and reports difficulty with focus and memorization. The program should build consistency before volume. Lessons should use plain language, practical relevance, short recall, and repeated review. Main goals are broader knowledge, productivity, communication, and IT capability.

The learner has also reported feeling that memory and thinking capacity have declined over several years. This workspace cannot assess the cause. Do not make medical claims. Encourage professional evaluation if the concern is worsening or interfering with daily life.

## Schedule change (2026-07-27)

The program moved from a single daily run to a **Twice-Daily Schedule**:

- **Morning Run**: new lesson + due reviews + morning tech-news brief.
- **Evening Run**: light reinforcement on the morning lesson + evening tech-news brief (no second full lesson).

See `AGENTS.md` for full guardrails, catch-up rules, and the rule-of-thumb for which file to update.

## Current state

- Program start: 2026-07-14
- Current difficulty: Level 1
- Daily lesson target: 10 to 15 minutes
- Lessons created: 3
- Reviews completed: 0 (learner confirmation required)
- Current rotation position: 4 of 7
- Next topic: Business and Economics
- Next proposed lesson: `BE-001` — (to be refined on the day)
- Automation note: expects AM + PM runs.

## Active lesson

- ID: `AI-001`
- Title: What “AI” usually means in the everyday tools you already use
- Date: 2026-07-27
- File: `03_AI_Data_and_Modern_Tech/AI-001_2026-07-27_what-ai-means-in-everyday-tools.html`
- Status: Created (catch-up PM run); learner completion not yet confirmed

## Previous active lessons (still pending confirmation)

- ID: `PC-001`
- Title: How to explain an idea clearly using Context, Point, and Example
- Date: 2026-07-26
- File: `02_Productivity_and_Communication/PC-001_2026-07-26_explain-idea-context-point-example.html`
- Status: Created; learner completion not yet confirmed

- ID: `ITF-001`
- Title: How DNS helps your browser find a website
- Date: 2026-07-14
- File: `01_IT_Foundations/ITF-001_2026-07-14_how-dns-finds-a-website.html`
- Status: Created; learner completion not yet confirmed

## Next reviews

- 2026-07-26: `ITF-001` overdue (+1 / +3 / +7) — review file: `08_Reviews/REVIEW_2026-07-26.html`
- 2026-07-27: `PC-001` +1 day + ITF-001 still pending — review file: `08_Reviews/REVIEW_2026-07-27.html`
- 2026-07-28: `AI-001` +1 day
- 2026-07-29: `PC-001` +3 days
- 2026-07-30: `AI-001` +3 days
- 2026-08-02: `PC-001` +7 days
- 2026-08-03: `AI-001` +7 days
- 2026-08-04: `ITF-001` +21 days
- 2026-08-16: `PC-001` +21 days
- 2026-08-17: `AI-001` +21 days

## Tech-news tracking

- Folder: `tech-news/` (HTML only)
- Naming: `YYYY-MM-DD-AM.html` / `YYYY-MM-DD-PM.html`
- 2026-07-27 AM: created (catch-up)
- 2026-07-27 PM: created
- Linked from `index.html`.

## Adjustment rules

- If the learner reports overload, reduce lesson length to 7 to 10 minutes.
- If the learner misses three consecutive days, resume with a short review instead of adding extra lessons.
- If the learner scores below 60% twice on the same topic, create a simpler explanation with a different example.
- If the learner consistently scores 80% or higher and reports the lessons are easy, consider Level 2.
- Never backfill missed lessons in bulk.

## Run log

### 2026-07-27 (PM catch-up run)

- AM run was missed (only instruction-update commits earlier in the day).
- This PM run performed catch-up: created the day’s lesson, due reviews, both tech briefs, and light reinforcement via the lesson Q&A itself.
- Created Level-1 lesson `AI-001` in `03_AI_Data_and_Modern_Tech/`.
- Created review file `08_Reviews/REVIEW_2026-07-27.html` covering PC-001 +1 and still-pending ITF-001.
- Created `tech-news/2026-07-27-AM.html` and `tech-news/2026-07-27-PM.html`.
- Updated `index.html`, this `CONTEXT.md`, and `MEMORY.md`.
- Next rotation step: Business and Economics.
- No lesson or review marked completed (awaiting learner confirmation).
- Flagged as catch-up run.

### 2026-07-27 (Instructions update)

- Learner confirmed the Twice-Daily Schedule and asked for the instructions to be pushed to the repo.
- Updated `AGENTS.md` (Morning / Evening runs, tech-news, guardrails, catch-up, file-update rule of thumb).
- Lightly updated `GUIDE.md` (twice-daily rhythm, tech-news standard, folder map).
- Refreshed this `CONTEXT.md` for the new schedule.
- No new lesson or tech brief created in this commit; the next AM run should produce `AI-001` + morning tech brief + any due reviews.

### 2026-07-27 (Tech-news format)

- Learner requested tech-news be **HTML only** (not Markdown) and that `index.html` surface the briefs.
- Updated `AGENTS.md`, `GUIDE.md`, `CONTEXT.md`, and `index.html` accordingly.
- Tech-news files will use `tech-news/YYYY-MM-DD-AM.html` and `…-PM.html`.
