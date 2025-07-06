<h1 align="center">🔮 Gemini Clone</h1>
<p align="center">
  A sleek, responsive AI chat application inspired by <strong>Google Gemini</strong> — with animated typing, recent prompt memory, and a clean modern UI.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.x-blue?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/Responsive-Yes-green?style=flat-square&logo=css3" />
  <img src="https://img.shields.io/badge/Status-Complete-green?style=flat-square&logo=github" />
</p>

<p align="center">
  🔗 <strong>Live Demo:</strong> <a href="https://gemini-clone-chat-app.netlify.app/" target="_blank">Gemini Clone</a>
</p>

---

## ✨ Features

✅ Clean Gemini-style layout  
✅ Real-time typing animation (word-by-word)  
✅ Prompt history with instant reuse  
✅ Beautiful & responsive design (mobile-ready)  
✅ Simple API integration ready (Gemini / OpenAI / custom)

---

## 🧠 Tech Stack

| Tech | Usage |
|------|-------|
| `React.js` | Frontend framework |
| `JavaScript (ES6+)` | Logic & animation |
| `CSS3 / Flexbox / Grid` | Responsive styling |
| `React Context` | Global state for prompts/results |
| `Gemini API` (optional) | To generate responses |

---

## 🚀 Getting Started

### 🛠️ Local Setup

```bash
# Clone the repo
git clone https://github.com/HarshiJain20/gemini-clone.git
cd gemini-clone

# Install dependencies
npm install

# Run locally
npm start

// Inside config/run.js

const run = async (prompt) => {
  const res = await fetch("YOUR_API_ENDPOINT", {
    method: "POST",
    headers: { ... },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  return data.reply;
};

export default run;
