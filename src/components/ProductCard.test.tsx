import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import ProductCard from "./ProductCard";
import type { ProductCardProps } from "../utils/types";
import store from "../utils/store";

const mockProduct = {
  id: 12,
  title: "Annibale Colombo Sofa",
  description:
    "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
  category: "furniture",
  price: 2499.99,
  discountPercentage: 14.4,
  rating: 3.92,
  stock: 60,
  tags: ["furniture", "sofas"],
  brand: "Annibale Colombo",
  sku: "FUR-ANN-ANN-012",
  weight: 6,
  dimensions: {
    width: 12.75,
    height: 20.55,
    depth: 19.06,
  },
  warrantyInformation: "Lifetime warranty",
  shippingInformation: "Ships in 1 week",
  availabilityStatus: "In Stock",
  reviews: [
    {
      rating: 3,
      comment: "Very unhappy with my purchase!",
      date: "2025-04-30T09:41:02.053Z",
      reviewerName: "Christian Perez",
      reviewerEmail: "christian.perez@x.dummyjson.com",
    },
    {
      rating: 5,
      comment: "Fast shipping!",
      date: "2025-04-30T09:41:02.053Z",
      reviewerName: "Lillian Bishop",
      reviewerEmail: "lillian.bishop@x.dummyjson.com",
    },
    {
      rating: 1,
      comment: "Poor quality!",
      date: "2025-04-30T09:41:02.053Z",
      reviewerName: "Lillian Simmons",
      reviewerEmail: "lillian.simmons@x.dummyjson.com",
    },
  ],
  returnPolicy: "7 days return policy",
  minimumOrderQuantity: 1,
  meta: {
    createdAt: "2025-04-30T09:41:02.053Z",
    updatedAt: "2025-04-30T09:41:02.053Z",
    barcode: "1777662847736",
    qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
  },
  images: [
    "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp",
    "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/2.webp",
    "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/3.webp",
  ],
  thumbnail:
    "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
};

const mockProps: ProductCardProps = {
  price: 2499.99,
  title: "Annibale Colombo Sofa",
  thumbnail:
    "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
  rating: 3.92,
  id: 12,
  product: mockProduct,
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
