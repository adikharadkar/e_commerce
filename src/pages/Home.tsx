import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";
import "../styles/Home.css";

const ITEMS_PER_PAGE = 20;

const Home = () => {
  const { products, error, isLoading } = useFetchProducts();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const num_of_pages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = ITEMS_PER_PAGE * currentPage;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        {[...Array(num_of_pages)].map((_, index) => (
          <button onClick={() => setCurrentPage(index)}>{index + 1}</button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === num_of_pages - 1}
        >
          Next
        </button>
      </div>
      <ul className="products_list">
        {products.slice(startIndex, endIndex).map((item) => (
          <li key={item.id}>
            <ProductCard
              title={item.title}
              price={item.price}
              rating={item.rating}
              thumbnail={item.thumbnail}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
