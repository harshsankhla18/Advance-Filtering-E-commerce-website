# 🛍️ Shoe Store - React E-Commerce App

A fully responsive, filterable and animated shoe store built using **React.js**, featuring real-time search, category filtering, price-based filtering, and beautiful card hover effects. Easily deployed on **Netlify** with smooth user experience and dynamic design.

*Link:https://advance-filtering-e-commerce.netlify.app/*
---

## 📸 Preview

![image](https://github.com/user-attachments/assets/7a2d8f48-3dd9-40ae-90d9-595e4aeedb0c)
<!-- Replace with actual preview image path or Netlify screenshot -->

---

## 🧩 Features

- ✅ Dynamic product search
- ✅ Sidebar filters for:
  - Category (Flats, Heels, Sneakers, Sandals)
  - Color (Red, Green, White, Black)
  - Price Range (under $100, $150, $200, above $200)
- ✅ Real-time filtering based on selected options
- ✅ Responsive sidebar using Bootstrap's `Offcanvas`
- ✅ Fully Responsive UI
- 🔍 Live Search bar with smooth scaling animation
- 💖 Product Cards with hover animations and shadows
- 📦 Product rating, brand tags, and price display
- 🌓 Modern and clean layout with gradient backgrounds
- 🌐 Hosted on **Netlify**

---

## 🧑‍💻 Tech Stack

| Tech             | Usage                    |
|------------------|---------------------------|
| React.js         | Frontend framework        |
| CSS3             | Styling and responsiveness|
| HTML5            | Markup                   |
| Netlify          | Deployment platform       |

---
## 📁 Project Structure

```txt
src/
├── Components/
│   ├── Button.jsx
│   ├── Card.jsx
│   └── Input.jsx
│
├── Db/
│   └── data.js              # Product data source
│
├── Navigation/
│   ├── Sidebar/
│   │   ├── category/
│   │   │   └── Category.jsx
│   │   ├── color/
│   │   │   └── Color.jsx
│   │   ├── price/
│   │   │   └── Price.jsx
│   │   ├── Sidebar.css
│   │   └── Sidebar.jsx
│   ├── Nav.css
│   └── Nav.jsx
│
├── Product/
│   ├── Product.css
│   └── Product.jsx
│
├── App.jsx                 # Main app logic
├── index.css              # Global styles
└── main.jsx               # Entry point
```

## 🛠️ Tech Stack

- **React**
- **Bootstrap** (for Offcanvas component)
- **JavaScript**
- **CSS Modules**


📌 Notes
Ensure the filter values (category, color) match the case and format of values in data.js
Input values should be lowercase and consistent (value="heels" not "Heels")

📃 License
This project is open-source and available under the MIT License.

👨‍💻 Author
 Harsh Sankhla
🎓 BTech @ IIIT Bhagalpur
