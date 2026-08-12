# 🏎️ PitLine

🔗 **[Live Preview](https://alexij1651.github.io/F1-proyecto/)**

> A free, open-source Formula 1 live timing app — built from scratch to learn, race weekend by race weekend.
![Status](https://img.shields.io/badge/status-page%201%20of%203%20live-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Made with](https://img.shields.io/badge/made%20with-JavaScript-f7df1e)
![Last commit](https://img.shields.io/github/last-commit/Alexij1651/F1-proyecto)
![Repo size](https://img.shields.io/github/repo-size/Alexij1651/F1-proyecto)

<img width="1920" height="971" alt="PitLine preview" src="https://github.com/user-attachments/assets/9a65df66-2f43-4669-b6f9-b048cddb6b7f" />

## 📑 Contents
- [What is this?](#-what-is-this)
- [Features](#-features)
- [What I learned](#-what-i-learned-building-this)
- [Tech stack](#️-tech-stack)
- [Roadmap](#️-roadmap)


## 🏁 What is this?
Most F1 live timing apps are paid. PitLine is my take on building a free one from scratch — no frameworks, no build tools, just vanilla JS talking directly to a public API.

This is also a personal learning project as a **DAW (Web Application Development) student** — every version of this repo is a snapshot of what I know at that point, and that's on purpose.

## 🧠 What I learned building this

- Chaining and nesting `fetch` calls to combine data from multiple API endpoints
- Cross-referencing two datasets by a shared key (`Array.find()`)
- Building dynamic tables from JSON with template literals
- Polling with `setInterval` for a "live" feel without WebSockets

## 🚧 Project status

Currently in early development. Check the [Roadmap](#-roadmap) below to see where things stand.

## ✨ Features

- [x] Fetch live session data from OpenF1
- [x] Display driver positions in a real-time-updating table
- [x] Show gaps/intervals between drivers
- [x] Auto-refresh every 5 seconds
- [x] Dark, broadcast-style UI with team colour accents
- [ ] Lap time comparison
- [ ] Basic telemetry view (speed, throttle, brake)
- [ ] Historical session lookup (past races)
- [ ] Persistent storage with own database
- [ ] Mobile-friendly version

## 🛠️ Tech stack

| Layer | Tech |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Data source | [OpenF1 API](https://openf1.org/) |
| Backend *(planned)* | *[TBD]* |
| Database *(planned)* | *[TBD]* |

## 🚀 Getting started

```bash
git clone https://github.com/Alexij1651/F1-proyecto.git
cd F1-proyecto
# open docs/index.html in your browser, or visit the live demo above
```

No build steps, no dependencies to install — just plain JS talking to a public API.

## 🗺️ Roadmap

1. ✅ **Phase 1 — Basics**: fetch and render session data, styled UI, auto-refresh
2. 🚧 **Phase 2 — More views**: driver standings page, GP/telemetry explorer
3. **Phase 3 — Backend**: own server + database for storing historical data
4. **Phase 4 — Mobile**: adapt the app for mobile devices

## 👤 Author

Built by [Alejandro Ibáñez Jurado](https://github.com/Alexij1651) — 2nd year Web Application Development (DAW) student.

## 🙏 Acknowledgements

- [OpenF1](https://openf1.org/) for making F1 data freely accessible to everyone.
- The F1 dev community for inspiration.

## 📄 License

Este proyecto está bajo la Licencia MIT — libre para usar, modificar y aprender de él. Ver el archivo [LICENSE](LICENSE) para más detalles.
