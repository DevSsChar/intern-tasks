<details>
<summary><strong>Table of Contents (click to expand)</strong></summary>

1. Translator App (Streamlit)
2. FAQ Chatbot (spaCy + TF‑IDF)
3. Extra Tasks (AI Portfolio, K8s Manifests)
4. Docker Images

</details>

---

## 📂 Repository Overview

```plaintext
codealpha/
├── translator_app/        # 🌐 Language Translator (Streamlit)
├── faq_chatbot/           # 📚 FAQ Chatbot (spaCy + TF-IDF)
├── ai-portfolio/          # ⚡ Next.js + Tailwind developer portfolio (extra task)
├── k8s/                   # ☸️ Kubernetes manifests (extra infra task)
└── readme.md              # Main consolidated documentation
```

---

## 🚀 Project Showcase

| App / Task        | Description                                                 | Key Tech                                      |
|-------------------|-------------------------------------------------------------|-----------------------------------------------|
| 🌐 Translator      | Translate text across 100+ languages instantly              | `streamlit`, `googletrans`, `langcodes`       |
| 📚 FAQ Chatbot     | Answer FAQs via semantic similarity                         | `streamlit`, `spaCy`, `scikit-learn`, `TF-IDF`|
| ⚡ AI Portfolio     | Developer portfolio (dark/light theme, projects, contact)  | `Next.js`, `TailwindCSS`                      |
| ☸️ K8s Manifests    | Deployment + Service + Ingress + MongoDB                   | `Kubernetes`, `MongoDB`                       |

---

<details>
<summary><strong>🌐 Language Translator App (click to expand)</strong></summary>

### ✨ Features

* Auto-detect input language
* Translate into 100+ languages
* Clean, responsive Streamlit UI
* Lightweight and fast

### 🧠 How It Works

* Uses `googletrans` (unofficial Google Translate API)
* Maps human-readable names to ISO codes via `LANGUAGES`
* Stateless request/response pattern

### 📦 Local Installation
```bash
pip install streamlit googletrans==4.0.0-rc1
```
Run:
```bash
streamlit run translator_app/app.py
```

### 🐳 Docker
```bash
docker pull devs12/translator:latest
docker run -p 8501:8501 devs12/translator:latest
```
Open: http://localhost:8501

### 🖼️ (Optional) UI Preview
`image.png` (translator screenshot placeholder)

</details>

<details>
<summary><strong>📚 FAQ Chatbot (click to expand)</strong></summary>

### � Features
* FAQ intent matching via TF-IDF + cosine similarity
* spaCy lemmatization for normalization
* Threshold-based confidence (adjustable)
* Simple JSON-driven knowledge base
* Streamlit interactive interface

### 📁 Structure
```plaintext
faq_chatbot/
├── app.py
├── chatbot/
│   ├── core.py
│   └── utils.py
├── data/
│   └── faqs.json
├── requirements.txt
└── Dockerfile (if added for container build)
```

### 🔍 Pipeline
1. Normalize user input (lowercase, lemmatize)
2. Vectorize FAQs + query with TF-IDF
3. Compute cosine similarity
4. Return best answer if score >= threshold (default 0.3)
5. Otherwise fallback: ask user to rephrase

### 🛎️ Install & Run Locally
```bash
pip install -r faq_chatbot/requirements.txt
python -m spacy download en_core_web_sm
streamlit run faq_chatbot/app.py
```

### 🐳 Docker
```bash
docker pull devs12/faq-chatbot:latest
docker run -p 8501:8501 devs12/faq-chatbot:latest
```

### 📝 Update FAQs
Edit `faq_chatbot/data/faqs.json`:
```json
{
  "What is your return policy?": "You can return items within 30 days.",
  "How can I track my order?": "Track your order with the link emailed after purchase."
}
```

### UI
![FAQ UI](image-1.png)

### 🚀 Future Ideas
* Sentence embeddings (e.g. MiniLM / BERT)
* Multilingual spaCy model
* Feedback logging for unanswered queries
* Caching vectorizer model

</details>

<details>
<summary><strong>⚡ AI Portfolio (extra task) – click to expand</strong></summary>

Next.js + Tailwind project showcasing developer profile, projects, contact form, theming, and reusable components (`Header`, `ProjectCard`, `ThemeToggle`).

Run locally:
```bash
cd ai-portfolio
npm install
npm run dev
```
Open: http://localhost:3000

</details>

<details>
<summary><strong>☸️ Kubernetes Manifests (extra infra) – click to expand</strong></summary>

Located in `k8s/`:
* Deployments: frontend, backend, MongoDB
* Services: ClusterIP services for internal routing
* PersistentVolume / PersistentVolumeClaim for MongoDB storage
* Ingress for external routing
* Secrets & Namespace segregation

Apply (example):
```bash
kubectl apply -f k8s/namespace.yml
kubectl apply -f k8s/.
```

</details>

---

## � Docker Repository
Central images published to: https://hub.docker.com/repositories/devs12

| Image | Purpose | Default Port |
|-------|---------|--------------|
| devs12/translator | Streamlit language translator | 8501 |
| devs12/faq-chatbot | Streamlit FAQ chatbot | 8501 |

Generic run pattern:
```bash
docker pull <image>
docker run -p 8501:8501 <image>
```

---

## 📄 License
MIT (see LICENSE if provided).

## 👤 Author
Dev Shah – internship & learning focused build.

