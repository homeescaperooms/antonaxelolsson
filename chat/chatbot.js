(function () {
  const data = window.ESCAPE_CHATBOT_DATA;
  if (!data || !Array.isArray(data.steps)) {
    console.error("ESCAPE_CHATBOT_DATA fehlt oder ist ungültig.");
    return;
  }

  const state = loadState() || {
    stepIndex: 0,
    hintsUsed: 0,
    wrongAttempts: 0,
    finished: false,
    history: []
  };

  function normalize(input) {
    return String(input || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[’'`´]/g, "")
      .replace(/\s+/g, " ");
  }

  function isCommand(input, commandList) {
    const normalized = normalize(input);
    return commandList.some(cmd => normalize(cmd) === normalized);
  }

  function answerMatches(input, answers) {
    const raw = String(input || "").trim();
    const normalized = normalize(raw);

    return answers.some(answer => {
      const answerValue = normalize(answer.value);

      if (answer.type === "startsWith") {
        return normalized.startsWith(answerValue);
      }

      if (answer.type === "contains") {
        return normalized.includes(answerValue);
      }

      return normalized === answerValue;
    });
  }

  function formatMessage(text) {
    if (!text) return "";
    const escaped = String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    return escaped
      .replace(/\[url=(.*?)\](.*?)\[\/url\]/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$2</a>')
      .replace(/\n/g, "<br>");
  }

  function saveState() {
    localStorage.setItem(data.storageKey, JSON.stringify(state));
  }

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(data.storageKey));
    } catch (e) {
      return null;
    }
  }

  function resetState() {
    localStorage.removeItem(data.storageKey);
    state.stepIndex = 0;
    state.hintsUsed = 0;
    state.wrongAttempts = 0;
    state.finished = false;
    state.history = [];
    saveState();
  }

  function currentStep() {
    return data.steps[state.stepIndex];
  }

  function addMessage(sender, text, persist = true) {
    const chatBody = document.querySelector(".escape-chatbot-body");
    const el = document.createElement("div");
    el.className = `escape-chatbot-message ${sender}`;
    el.innerHTML = formatMessage(text);
    chatBody.appendChild(el);
    chatBody.scrollTop = chatBody.scrollHeight;

    if (persist) {
      state.history.push({ sender, text });
      saveState();
    }
  }

  function showCurrentPrompt() {
    const step = currentStep();
    if (step) addMessage("bot", step.message);
  }

  function advanceStep(optionalIntro) {
    if (optionalIntro) addMessage("bot", optionalIntro);

    state.stepIndex += 1;
    state.hintsUsed = 0;
    state.wrongAttempts = 0;

    if (state.stepIndex >= data.steps.length) {
      state.finished = true;
      addMessage("bot", data.finalMessage);
    } else {
      showCurrentPrompt();
    }

    saveState();
  }

  function handleHint() {
    const step = currentStep();
    if (!step || state.finished) return;

    const hints = step.hints || [];
    if (state.hintsUsed < hints.length) {
      addMessage("bot", hints[state.hintsUsed]);
      state.hintsUsed += 1;
    } else {
      addMessage("bot", "Mehr Hinweise habe ich zu dieser Aufgabe nicht. Wenn ihr gar nicht weiterkommt, sendet LÖSUNG.");
    }
    saveState();
  }

  function handleSolution() {
    const step = currentStep();
    if (!step || state.finished) return;

    const reveal = step.solutionText || `Die Lösung lautet: ${step.displaySolution || "siehe Rätseldaten"}. Ich werte das jetzt als gelöst.`;
    advanceStep(reveal);
  }

  function handleWrongAnswer() {
    const step = currentStep();
    const wrongMessages = step.wrong || [];
    const idx = Math.min(state.wrongAttempts, Math.max(wrongMessages.length - 1, 0));
    addMessage("bot", wrongMessages[idx] || "Das ist leider nicht die richtige Lösung.");
    state.wrongAttempts += 1;
    saveState();
  }

  function handleInput(value) {
    const input = String(value || "").trim();
    if (!input) return;

    addMessage("user", input);

    if (isCommand(input, data.commands.restart)) {
      resetState();
      addMessage("bot", "Verbindung neu aufgebaut.", true);
      showCurrentPrompt();
      return;
    }

    if (state.finished) {
      addMessage("bot", "Wir sind hier fertig. Den Link zum nächsten Kapitel habe ich euch bereits geschickt.");
      return;
    }

    if (isCommand(input, data.commands.hint)) {
      handleHint();
      return;
    }

    if (isCommand(input, data.commands.solution)) {
      handleSolution();
      return;
    }

    const step = currentStep();

    if (answerMatches(input, step.answers || [])) {
      advanceStep();
    } else {
      handleWrongAnswer();
    }
  }

  function createWidget() {
    const wrapper = document.createElement("div");
    wrapper.className = "escape-chatbot";

    wrapper.innerHTML = `
      <button class="escape-chatbot-bubble" aria-label="Chat öffnen">
        <span>💬</span>
      </button>

      <section class="escape-chatbot-window" aria-live="polite">
        <header class="escape-chatbot-header">
          <div>
            <strong>${data.botName || "Kontaktperson"}</strong>
            <small>verschlüsselte Verbindung</small>
          </div>
          <button class="escape-chatbot-close" aria-label="Chat schließen">×</button>
        </header>

        <div class="escape-chatbot-body"></div>

        <form class="escape-chatbot-form">
          <input class="escape-chatbot-input" type="text" autocomplete="off" placeholder="Nachricht eingeben …" />
          <button type="submit">Senden</button>
        </form>
      </section>
    `;

    document.body.appendChild(wrapper);

    const bubble = wrapper.querySelector(".escape-chatbot-bubble");
    const close = wrapper.querySelector(".escape-chatbot-close");
    const form = wrapper.querySelector(".escape-chatbot-form");
    const input = wrapper.querySelector(".escape-chatbot-input");

    bubble.addEventListener("click", () => {
      wrapper.classList.add("open");
      input.focus();
    });

    close.addEventListener("click", () => wrapper.classList.remove("open"));

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = input.value;
      input.value = "";
      handleInput(value);
    });

    if (state.history.length === 0) {
      showCurrentPrompt();
    } else {
      state.history.forEach(item => addMessage(item.sender, item.text, false));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createWidget);
  } else {
    createWidget();
  }
})();
