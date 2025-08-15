import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import type { RootState } from "../utils/store";
import "../styles/Navbar.css";

interface IProps {
  onSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({ onSearchInput }: IProps) => {
  const items = useSelector((store: RootState) => store.cart.items);
  const [searchInput, setSearchInput] = useState<string>("");
  const debounceTimeout = useRef<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchInput(value);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      onSearchInput(value);
    }, 3000);
  };

  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink to="/" className="navbar-header">
            MegaMart
          </NavLink>
        </li>
        <li className="search-wrapper">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search product"
            className="search-field"
            value={searchInput}
            onChange={handleInputChange}
          />
          <FiSearch className="icon search-icon" />
        </li>
        <li>
          <NavLink to="/" className="signin-signup">
            <FiUser className="icon" />
            Sign Up/Sign In
          </NavLink>
        </li>
        <li className="cart-wrapper">
          <FiShoppingCart className="icon" />
          <NavLink to="/cart" className="cart-title">
            Cart {items.length}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
