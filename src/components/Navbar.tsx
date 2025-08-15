import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/store";
import "../styles/Navbar.css";

interface IProps {
  onSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({ onSearchInput }: IProps) => {
  const items = useSelector((store: RootState) => store.cart.items);
  const [searchInput, setSearchInput] = useState<string>("");
  const [deboundedSearchInput, setDebouncedSearchInput] = useState<string>("");
  const debounceTimeout = useRef<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchInput(value);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      setDebouncedSearchInput(value);
      onSearchInput(value);
    }, 3000);
  };

  const fetchSearchedProduct = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${deboundedSearchInput}`
      );
      if (!response.ok) {
        throw new Error("Product not found!");
      }
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchSearchedProduct();
  }, [deboundedSearchInput]);

  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search product"
            className="search-field"
            value={searchInput}
            onChange={handleInputChange}
          />
        </li>
        <li>
          <NavLink to="/cart">Cart {items.length}</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
