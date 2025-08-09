import type { ProductCardProps } from "../utils/types";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../styles/ProductCard.css";
import { addItem, removeItem } from "../reducers/Cart";
import type { RootState } from "../utils/store";

const ProductCard = ({
  price,
  title,
  thumbnail,
  rating,
  id,
  product,
}: ProductCardProps) => {
  const dispatch = useDispatch();
  const items = useSelector((store: RootState) => store.cart.items);
  return (
    <div className="product_card">
      <img src={thumbnail} alt={title} className="product_card_img" />
      <NavLink to={`/products/${id}`}>
        <h3 className="product_card_title">{title}</h3>
      </NavLink>
      <h2 className="product_card_price">${price}</h2>
      <p className="product_card_rating">{rating}</p>
      {items.includes(product) ? (
        <button onClick={() => dispatch(removeItem(id))}>
          Remove from Cart
        </button>
      ) : (
        <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
