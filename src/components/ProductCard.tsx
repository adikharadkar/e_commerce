import type { ProductCardProps } from "../utils/types";
import { NavLink } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({
  price,
  title,
  thumbnail,
  rating,
  id,
}: ProductCardProps) => {
  return (
    <div className="product_card">
      <img src={thumbnail} alt={title} className="product_card_img" />
      <NavLink to={`/products/${id}`}>
        <h3 className="product_card_title">{title}</h3>
      </NavLink>
      <h2 className="product_card_price">${price}</h2>
      <p className="product_card_rating">{rating}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
