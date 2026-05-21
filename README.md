# ShopSphere — E-Commerce Frontend Application

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

A responsive, fully-featured e-commerce frontend application built with React and TypeScript, featuring product browsing, detailed product views, search/filter functionality, and a shopping cart — all powered by Redux for global state management.

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
- [License](#license)

---

## 📖 About the Project

ShopSphere is a solo-built, frontend e-commerce application developed using React and TypeScript. It replicates the core shopping experience — from browsing a product catalogue and filtering results to viewing product details and managing a cart — with a clean, component-driven architecture and strongly-typed codebase throughout.

---

## ✨ Features

- 🛍️ **Product Catalogue** — Browse a full listing of products with clean, responsive card layouts
- 🔍 **Search & Filter** — Quickly find products by name or filter by category
- 📄 **Product Detail Page** — View detailed information for each product including images, description, and pricing
- 🛒 **Shopping Cart** — Add, remove, and manage items with real-time quantity and total price updates
- 🗂️ **Global State Management** — Entire application state managed via Redux / Redux Toolkit
- ⚡ **Vite-Powered** — Lightning-fast development server and optimised production builds

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | UI component library |
| TypeScript | Static typing across the entire codebase |
| Redux / Redux Toolkit | Global state management (cart, products, filters) |
| Axios / Fetch | API calls to fetch product data |
| Vite | Build tool and development server |
| CSS | Component styling and responsive layout |

---

## 📁 Project Structure

```
e_commerce/
└── frontend/
    ├── src/
    │   ├── components/       # Reusable UI components (ProductCard, CartItem, etc.)
    │   ├── pages/            # Page-level components (Home, ProductDetail, Cart)
    │   ├── store/            # Redux store, slices, and actions
    │   ├── types/            # TypeScript interfaces and type definitions
    │   ├── utils/            # Helper functions and constants
    │   └── App.tsx           # Root component and routing
    ├── public/               # Static assets
    ├── index.html
    ├── vite.config.ts
    └── package.json
```

> Note: Folder names may vary slightly — update to match your actual structure.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/adikharadkar/e_commerce.git
cd e_commerce/frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Open the App

Visit `http://localhost:5173` in your browser (Vite's default port).

### 5. Build for Production

```bash
npm run build
```

---

## 🗺️ Roadmap

- [x] Product catalogue with responsive layout
- [x] Product detail page
- [x] Search and filter functionality
- [x] Shopping cart with Redux state management
- [ ] User authentication (register / login)
- [ ] Checkout and order placement flow
- [ ] Order history and user profile page
- [ ] Backend integration with a REST API or Node.js server

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙋‍♂️ Author

**Aditya Kharadkar**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)]([https://www.linkedin.com/in/your-profile](https://www.linkedin.com/in/aditya-kharadkar-6352ba174/))
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/adikharadkar)
