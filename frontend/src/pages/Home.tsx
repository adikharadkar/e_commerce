import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";
import Pagination from "../components/Pagination";
import ProductTable from "../components/ProductTable";
import "../styles/Home.css";
import Products from "../shimmer_ui/Products";
import Categories from "../components/Categories";
import CategoriesShimmer from "../shimmer_ui/Categories";

const ITEMS_PER_PAGE = 20;

interface IProps {
  searchInput: string;
}

const Home = ({ searchInput }: IProps) => {
  const { products, error, isLoading } = useFetchProducts({
    searchInput: searchInput,
  });
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [selectedView, setSelectedView] = useState<string>("list");
  const num_of_pages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = ITEMS_PER_PAGE * currentPage;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  useEffect(() => {
    setCurrentPage(0);
  }, [searchInput]);

  const handleViewChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedView(e.target.value);
  };

  if (isLoading)
    return (
      <>
        <CategoriesShimmer />
        <Products />
      </>
    );
  if (error) return <h1>{error}</h1>;
  return (
    <div>
      <Categories />
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
