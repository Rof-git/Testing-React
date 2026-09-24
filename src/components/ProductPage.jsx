export function ProductPage({ products }) {

  return (
    <div>
      <h4>Our Products</h4>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} / kg <button onClick={() => onAddToCart(product)}>Add to List</button>
          </li>
        ))}
      </ul>
    </div>
  );
}