import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "./utils/store";

const Navbar = () => {
  const items = useSelector((store: RootState) => store.cart.items);
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">Cart {items.length}</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
