import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./pages/Home";
import "./App.css";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:prodId" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
