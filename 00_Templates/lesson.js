(function () {
  "use strict";

  const body = document.body;
  const lessonId = body.dataset.lessonId || "lesson-template";
  const storageKey = `daily-learning:${lessonId}`;
  const progressBar = document.querySelector("[data-reading-progress]");
  const state = loadState();

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch (_error) {
      return {};
    }
  }

  function saveState(nextState) {
    Object.assign(state, nextState);
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (_error) {
      // The lesson remains usable when storage is unavailable.
    }
  }

  function updateReadingProgress() {
    if (!progressBar) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 100;
    progressBar.style.width = `${percent}%`;
    progressBar.parentElement.setAttribute("aria-valuenow", String(Math.round(percent)));
  }

  window.addEventListener("scroll", updateReadingProgress, { passive: true });
  window.addEventListener("resize", updateReadingProgress);
  updateReadingProgress();

  const sizes = ["", "text-large", "text-larger"];
  let sizeIndex = Number.isInteger(state.sizeIndex) ? state.sizeIndex : 0;

  function applyTextSize() {
    body.classList.remove("text-large", "text-larger");
    if (sizes[sizeIndex]) body.classList.add(sizes[sizeIndex]);
  }

  document.querySelector("[data-text-smaller]")?.addEventListener("click", function () {
    sizeIndex = Math.max(0, sizeIndex - 1);
    applyTextSize();
    saveState({ sizeIndex });
  });

  document.querySelector("[data-text-larger]")?.addEventListener("click", function () {
    sizeIndex = Math.min(sizes.length - 1, sizeIndex + 1);
    applyTextSize();
    saveState({ sizeIndex });
  });

  applyTextSize();

  document.querySelectorAll("[data-recall-input]").forEach(function (input) {
    const id = input.id;
    if (state.answers && typeof state.answers[id] === "string") {
      input.value = state.answers[id];
    }

    input.addEventListener("input", function () {
      const answers = Object.assign({}, state.answers, { [id]: input.value });
      saveState({ answers });
    });
  });

  document.querySelectorAll("[data-answer-button]").forEach(function (button) {
    const targetId = button.getAttribute("aria-controls");
    const answer = document.getElementById(targetId);
    if (!answer) return;

    if (state.revealed && state.revealed[targetId]) {
      answer.hidden = false;
      button.setAttribute("aria-expanded", "true");
      button.textContent = "Hide model answer";
    }

    button.addEventListener("click", function () {
      const willShow = answer.hidden;
      answer.hidden = !willShow;
      button.setAttribute("aria-expanded", String(willShow));
      button.textContent = willShow ? "Hide model answer" : "Show model answer";
      const revealed = Object.assign({}, state.revealed, { [targetId]: willShow });
      saveState({ revealed });
    });
  });

  document.querySelectorAll("[data-review-check]").forEach(function (checkbox) {
    const id = checkbox.id;
    checkbox.checked = Boolean(state.reviews && state.reviews[id]);
    checkbox.addEventListener("change", function () {
      const reviews = Object.assign({}, state.reviews, { [id]: checkbox.checked });
      saveState({ reviews });
    });
  });

  const completeButton = document.querySelector("[data-complete-lesson]");
  const completionStatus = document.querySelector("[data-completion-status]");

  function renderCompletion() {
    if (!completionStatus || !completeButton) return;
    if (state.completedAt) {
      const when = new Date(state.completedAt);
      completionStatus.textContent = `Marked complete on ${when.toLocaleString()}.`;
      completeButton.textContent = "Lesson completed";
    }
  }

  completeButton?.addEventListener("click", function () {
    if (!state.completedAt) saveState({ completedAt: new Date().toISOString() });
    renderCompletion();
  });

  renderCompletion();
})();

