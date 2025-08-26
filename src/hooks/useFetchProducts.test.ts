import { beforeEach, describe, it, vi, expect } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { MOCK_PRODUCT } from "../utils/constants";
import { useFetchProducts } from "./useFetchProducts";

describe("useFetchProducts", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });
  it("should fetch products based on search input", async () => {
    const mockFetch = vi.fn(
      () =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ products: [MOCK_PRODUCT] }),
        }) as any
    );
    globalThis.fetch = mockFetch;
    const searchInput = "sofa";
    renderHook(() => useFetchProducts({ searchInput }));
    expect(mockFetch).toHaveBeenCalledWith(
      `https://dummyjson.com/products/search?q=${searchInput}`
    );

    const { result } = renderHook(() =>
      useFetchProducts({ searchInput: "sofa" })
    );
    await waitFor(() => {
      expect(result.current.products).toEqual([MOCK_PRODUCT]);
    });
  });

  it('should fetch product by ID when "productId" is provided', async () => {
    const mockFetch = vi.fn(
      () =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(MOCK_PRODUCT),
        }) as any
    );
    globalThis.fetch = mockFetch;
    const productId = "12";
    renderHook(() => useFetchProducts({ productId: productId }));
    expect(mockFetch).toHaveBeenCalledWith(
      `https://dummyjson.com/products/${productId}`
    );

    const { result } = renderHook(() =>
      useFetchProducts({ productId: productId })
    );
    await waitFor(() => {
      expect(result.current.products).toEqual([MOCK_PRODUCT]);
    });
  });
});
