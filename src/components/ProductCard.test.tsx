import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import ProductCard from "./ProductCard";
import type { ProductCardProps } from "../utils/types";
import store from "../utils/store";
import { MOCK_PRODUCT } from "../utils/constants";

const mockProps: ProductCardProps = {
  price: 2499.99,
  title: "Annibale Colombo Sofa",
  thumbnail:
    "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
  rating: 3.92,
  id: 12,
  product: MOCK_PRODUCT,
};

describe("Product Card Component", () => {
  test("renders correctly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductCard {...mockProps} />
        </BrowserRouter>
      </Provider>
    );
    expect(
      screen.getByTestId(`product-img-${mockProps.id}`)
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(`product-title-${mockProps.id}`)
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(`product-price-${mockProps.id}`)
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(`product-rating-${mockProps.id}`)
    ).toBeInTheDocument();
    expect(screen.getByTestId("add-to-cart")).toBeInTheDocument();
  });

  test("add to cart button works", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductCard {...mockProps} />
        </BrowserRouter>
      </Provider>
    );
    const addToCartButton = screen.getByTestId("add-to-cart");
    addToCartButton.click();
    const removeFromCartButton = await screen.findByTestId("remove-from-cart");
    expect(removeFromCartButton).toBeInTheDocument();
  });
});
