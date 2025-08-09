import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";
import Pagination from "../components/Pagination";
import ProductTable from "../components/ProductTable";
import "../styles/Home.css";

const ITEMS_PER_PAGE = 20;

const Home = () => {
  const { products, error, isLoading } = useFetchProducts();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [selectedView, setSelectedView] = useState<string>("list");
  const num_of_pages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = ITEMS_PER_PAGE * currentPage;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const handleViewChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedView(e.target.value);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div>
      <Pagination
        onPageChange={setCurrentPage}
        currentPage={currentPage}
        numOfPages={num_of_pages}
      />
      <select onChange={handleViewChange} value={selectedView}>
        <option value="list">List View</option>
        <option value="table">Table View</option>
      </select>
      {selectedView === "table" ? (
        <ProductTable products={products.slice(startIndex, endIndex)} />
      ) : (
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
      )}
    </div>
  );
};

export default Home;
