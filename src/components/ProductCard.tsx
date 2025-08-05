import type { ProductCardProps } from "../utils/types";
import "../styles/ProductCard.css";

const ProductCard = ({ price, title, thumbnail, rating }: ProductCardProps) => {
  return (
    <div className="product_card">
      <img src={thumbnail} alt={title} className="product_card_img" />
      <h3 className="product_card_title">{title}</h3>
      <h2 className="product_card_price">${price}</h2>
      <span className="product_card_rating">{rating}</span>
    </div>
  );
};

export default ProductCard;
