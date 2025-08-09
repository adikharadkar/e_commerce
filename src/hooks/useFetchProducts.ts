import { useState, useEffect } from "react";
import type { Product } from "../utils/types";

const BASE_URL = "https://dummyjson.com/products";

export const useFetchProducts = (productId?: string | null) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const url = productId ? `${BASE_URL}/${productId}` : `${BASE_URL}?limit=500`;

  const fetchProducts = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Could not fetch data.");
      }
      const data = await response.json();
      if ("products" in data) {
        setProducts(data.products);
      } else {
        setProducts([data]);
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("Could not fetch products.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [productId]);

  return { products, error, isLoading };
};
