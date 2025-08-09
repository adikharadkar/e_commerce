import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";
import Pagination from "../components/Pagination";
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
      <Pagination
        onPageChange={setCurrentPage}
        currentPage={currentPage}
        numOfPages={num_of_pages}
      />
      <ul className="products_list">
        {products.slice(startIndex, endIndex).map((item) => (
          <li key={item.id}>
            <ProductCard
              title={item.title}
              price={item.price}
              rating={item.rating}
              thumbnail={item.thumbnail}
              id={item.id}
              product={item}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
