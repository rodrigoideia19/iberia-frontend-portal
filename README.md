# Iberia Airlines Portal — Frontend Replica

> [!NOTE]  
> **Academic & Educational Disclaimer:**  
> This project was developed strictly for academic and educational purposes as part of the **Web Technologies (Tecnologias Web)** curricular unit in the **BSc in Computer Science (Licenciatura em Engenharia Informática)** at **ISEC - Instituto Superior de Engenharia de Coimbra** (Academic Year 2024/2025).  
> All brand trademarks, logos, typography, and original design elements belong exclusively to **Iberia Líneas Aéreas**. This repository is an educational demonstration of front-end web engineering and is not affiliated with or endorsed by Iberia.

---

## 📌 Overview

This project is a high-fidelity front-end replica of the official **Iberia Airlines** web portal. It was built from scratch without external CSS frameworks, emphasizing semantic markup, advanced styling architecture with **SASS/SCSS**, responsive layouts across multiple breakpoints, and interactive DOM manipulation using vanilla **JavaScript**.

---

## ✨ Features

- **Multi-Level Responsive Navigation:**
  - Interactive mega-menus and hierarchical sub-menus (*Preparar el viaje*, *Experiencia Iberia*, *Iberia Plus*).
  - Mobile/tablet collapsible drawer menus with animated transitions.
- **Flight Information & Simulator:**
  - Interactive flight schedule query tool with simulated real-time status updates (On Time / Delayed) based on date, destination, and flight type.
- **Responsive Layout Design:**
  - Handcrafted responsive styling built with SCSS breakpoints for:
    - Desktop: `1280px+`
    - Small Desktop / Laptop: `max-width: 1280px`
    - Tablet: `max-width: 1024px`
    - Mobile: `max-width: 768px`
- **Modular Component Architecture:**
  - Semantic HTML structure dividing hero banners, promotional cards, booking tabs, travel guides, and dynamic footer accordions.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic document structuring, accessibility standards, and SEO-friendly tags.
- **SASS / SCSS & CSS3:** Flexbox, CSS Grid, media queries, CSS variables, and modular styling.
- **JavaScript (ES6+):** Pure Vanilla JS for DOM manipulation, dynamic class toggling, event handling, and flight query simulation.

---

## 📁 Project Structure

```text
├── fonts/               # Custom web fonts and iconography
├── img/                 # UI assets, banners, icons, and illustrations
├── index.html           # Main semantic HTML5 document
├── estilo.scss          # SASS source styling with variables and nested rules
├── estilo.css           # Compiled CSS stylesheet
├── script.js            # Interactive logic, navigation toggles & form handling
└── README.md            # Project documentation
```

---

## 🚀 How to Run Locally

No build tools or server dependencies required:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rodrigoideia19/iberia-frontend-portal.git
   ```
2. **Open the project:**
   - Double-click `index.html` to open it directly in any modern web browser, or:
   - Use the VS Code extension **Live Server** to preview with live reloading.

---

## 👤 Author

* **Rodrigo Salgueiro Ideia** — [GitHub](https://github.com/rodrigoideia19)
  * BSc in Computer Science, Instituto Superior de Engenharia de Coimbra (ISEC)
