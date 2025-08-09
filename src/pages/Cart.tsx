import { useSelector } from "react-redux";
import type { RootState } from "../utils/store";
import ProductCard from "../components/ProductCard";
import type { Product } from "../utils/types";
import Pagination from "../components/Pagination";
import { useState } from "react";
import "../styles/Cart.css";

const ITEMS_PER_PAGE = 20;

const Cart = () => {
  const items = useSelector((store: RootState) => store.cart.items);
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = ITEMS_PER_PAGE * currentPage;
  const num_of_pages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const endIndex = startIndex + ITEMS_PER_PAGE;
  return (
    <div>
      <Pagination
        numOfPages={num_of_pages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      ></Pagination>
      <main className="products">
        {items &&
          items
            .slice(startIndex, endIndex)
            .map((item: Product) => (
              <ProductCard
                id={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
                price={item.price}
                product={item}
                rating={item.rating}
              />
            ))}
      </main>
    </div>
  );
};

export default Cart;
