import type { Product } from "../utils/types";

interface IProps {
  products: Product[];
}

const ProductTable = ({ products }: IProps) => {
  return (
    <div>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Action</th>
        </thead>
        {products.map((product) => (
          <tbody>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>${product.price}</td>
            <td>{product.rating}</td>
            <td>
              <button>Add to Cart</button>
            </td>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ProductTable;
