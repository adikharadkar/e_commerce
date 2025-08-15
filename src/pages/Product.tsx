import { useParams } from "react-router-dom";

import { useFetchProducts } from "../hooks/useFetchProducts";

const Product = () => {
  const { prodId } = useParams();
  const { products, error, isLoading } = useFetchProducts({
    productId: prodId,
  });
  const product = products[0];

  if (error) return <h1>Could not fetch product.</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <img src={product.thumbnail} />
      <aside>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h2>${product.price}</h2>
        <ul>
          {product.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Product;
