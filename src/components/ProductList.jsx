export function ProductList({ products }) {

  return (
    <div>
      <h4>Products</h4>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} / kg
          </li>
        ))}
      </ul>
    </div>
  );
}