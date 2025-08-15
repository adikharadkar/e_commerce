import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./utils/store";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  const [searchedInput, setSearchedInput] = useState<string>("");
  return (
    <>
      <Provider store={store}>
        <Navbar onSearchInput={setSearchedInput} />
        <Routes>
          <Route path="/" element={<Home searchInput={searchedInput} />} />
          <Route path="/products/:prodId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
