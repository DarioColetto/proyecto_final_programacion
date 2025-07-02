export default function ProductItem({ product }) {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
      <p>Stock: {product.stock}</p>
    </li>
  );
}
