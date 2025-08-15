import { useState, useEffect } from "react";

export const useFetchCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/category-list"
      );
      if (!response.ok) {
        throw new Error("Could not fetch categories");
      }
      const data = await response.json();
      let category_list: string[] = [];
      data.forEach((d: string) => {
        let replaced_str: string = d;
        if (d.includes("-")) {
          replaced_str = d.replace("-", " ");
        }
        category_list.push(replaced_str);
      });
      setCategories(category_list);
    } catch (e) {
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
    fetchCategories();
  }, []);

  return { categories, isLoading, error };
};
