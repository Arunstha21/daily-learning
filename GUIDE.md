# Teaching guide

## The daily experience

The learner should be able to open one file, understand what matters, try the idea, answer a few questions, and stop. A successful lesson feels complete after 10 to 15 minutes.

The lesson should not depend on motivation or long concentration. Break information into small sections with explicit stopping points. Use plain English first; introduce the technical term after the idea is understandable.

## Twice-daily rhythm

- **Morning**: full new lesson + any due reviews + morning tech-news brief.
- **Evening**: light reinforcement (2–4 extra recall questions or a short recap appended to the morning lesson) + evening tech-news brief (non-overlapping).
- Never create a second full lesson on the same calendar day unless the morning run was completely missed (then the PM run becomes a flagged catch-up).

## Standard lesson sequence

1. **Outcome:** One sentence describing what the learner will be able to explain or do.
2. **Memory warm-up:** One or two questions from earlier lessons when relevant.
3. **Problem first:** A familiar situation that creates a reason to learn the idea.
4. **Core idea:** A short explanation of the main concept.
5. **How it works:** No more than three steps or supporting ideas.
6. **Worked example:** A realistic example with each step shown.
7. **Common confusion:** Clearly separate two ideas people often mix up.
8. **Small action:** A task that takes less than three minutes.
9. **Recap:** Three short statements.
10. **Q&A:** Three to five questions answered only after the learner attempts them.
11. **Review plan:** Display the +1, +3, +7, and +21 dates.
12. **Sources:** Direct, authoritative links and the date checked.

Evening reinforcement may add 2–4 additional short questions to the existing Q&A / recap area of that day's lesson rather than creating a new file.

## Memory-support method

Use recognition sparingly. The learner should first try to produce an answer from memory, even if the answer is incomplete. Then show immediate, specific feedback.

Use spaced reviews rather than repeating the full lesson. Each review should ask for the central idea in a new form:

- **+1 day:** Identify and explain the core idea.
- **+3 days:** Apply it to a slightly different example.
- **+7 days:** Compare it with a related idea or diagnose a mistake.
- **+21 days:** Explain it simply and use it in a practical scenario.

The review schedule supports retention; it is not a medical treatment or a guarantee.

## Difficulty control

Keep each lesson at Level 1 unless `MEMORY.md` shows consistent success.

- **Level 1:** One idea, familiar vocabulary, guided example.
- **Level 2:** Two connected ideas, less guidance, short comparison.
- **Level 3:** Independent application, trade-off, or mini-project.

Increase difficulty only after the learner completes several lessons and reviews without reporting overload. If focus drops, shorten the next lesson before reducing accuracy.

## Communication practice

Every lesson should improve communication, even when the topic is technical. Include one prompt such as:

- Explain the idea in one sentence.
- Give a 30-second explanation to a non-technical person.
- Replace jargon with plain language.
- Ask one precise follow-up question.

## Research standard

Use this source order:

1. Official standards, government agencies, or original datasets
2. Official product or maintainer documentation
3. Peer-reviewed research or university repositories
4. Established reporting when primary material is unavailable

Use recent sources for changing topics. Older sources are acceptable for stable foundations, such as protocol specifications, but explain why they remain relevant. Label employer surveys, projections, and models as such; do not present them as guaranteed outcomes.

## Tech-news standard

- All tech-news briefs are **HTML only** (no Markdown).
- Keep briefs short (4–8 bullets).
- Prefer primary sources and established tech outlets.
- Morning brief covers the previous ~12–24 h (overnight priority).
- Evening brief covers same-day later developments and must not repeat the morning items.
- Always state the approximate time window and the date checked.
- Store files as `tech-news/YYYY-MM-DD-AM.html` and `tech-news/YYYY-MM-DD-PM.html`.
- Match the calm visual language of the rest of the site (system fonts, strong contrast, mobile-first, keyboard accessible, no external scripts).

## HTML design standard

Use an adult, calm visual style. The interface should feel clear rather than childish.

- System fonts only; minimum body size 17px.
- Maximum reading width around 760px.
- Strong contrast with blue as the primary color and orange only for important actions.
- Short cards with generous spacing.
- Persistent reading progress at the top.
- Buttons must have text labels and visible focus states.
- Question feedback must use text as well as color.
- Motion must be subtle and disabled when reduced motion is requested.
- Interactive answers and completion state should persist in `localStorage`.

## Folder map

| Folder | Prefix | Scope |
| --- | --- | --- |
| `01_IT_Foundations` | `ITF` | Internet, computers, software, security, programming basics |
| `02_Productivity_and_Communication` | `PC` | Clear writing, focus systems, decisions, meetings, explanations |
| `03_AI_Data_and_Modern_Tech` | `AI` | AI literacy, data, automation, cloud, current technology |
| `04_Business_and_Economics` | `BE` | Markets, money, organizations, incentives, business models |
| `05_Science_and_Critical_Thinking` | `SCT` | Scientific reasoning, probability, evidence, systems |
| `06_Society_History_and_Current_Affairs` | `SHA` | Institutions, history, geography, and carefully sourced current affairs |
| `07_Practical_Projects` | `PP` | Weekly synthesis and small useful projects |
| `08_Reviews` | `REVIEW` | Date-based spaced-review sessions |
| `tech-news` | — | Twice-daily short tech briefs (AM / PM **HTML**) |

## Completion checklist

Before saving a lesson, confirm:

- The central idea can be stated in one sentence.
- Every factual claim has an appropriate source.
- The content fits 10 to 15 minutes.
- The page has a practical example and communication exercise.
- Questions require recall, not just recognition.
- Answers explain why.
- Review dates are correct.
- Navigation and controls work by keyboard.
- The page works at 375px wide.
- `index.html`, `CONTEXT.md`, and `MEMORY.md` are updated.
- For the day: AM and/or PM tech-news HTML brief(s) exist and are linked from `index.html` if this was a full run.
