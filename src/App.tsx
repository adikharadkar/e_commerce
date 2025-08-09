import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./utils/store";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import "./App.css";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:prodId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
