import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { useFetchCategories } from "../hooks/useFetchCategories";
import "../styles/Categories.css";

const Categories = () => {
  const { categories, error } = useFetchCategories();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "next" ? 200 : -200,
        behavior: "smooth",
      });
    }
  };
  if (error) return <h1>{error}</h1>;

  return (
    <div className="categories">
      <button
        onClick={() => scroll("prev")}
        style={{ margin: "0 0 0 20px" }}
        className="scroll-button"
      >
        <FaAngleLeft />
      </button>
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "12px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // Edge/IE
        }}
      >
        {categories.map((cat, i) => (
          <NavLink to={`/category/${cat}`}>
            <div key={i} className="category">
              {cat}
            </div>
          </NavLink>
        ))}
      </div>
      <button
        onClick={() => scroll("next")}
        style={{ margin: "0 20px 0 0" }}
        className="scroll-button"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Categories;
