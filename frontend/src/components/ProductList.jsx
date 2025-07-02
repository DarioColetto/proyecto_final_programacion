import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import ProductItem from './ProductItem';
import Filters from './Filters';
import mockProducts from '../mocks/products';
import '../App.css'

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    category: '',
    sort: '',
    minPrice: '',
    maxPrice: ''
  });

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => {
        console.warn("No se pudo conectar con el backend. Usando datos mock.");
        setProducts(mockProducts); // Fallback to mock data
      });
  }, []);

  const filtered = products
    .filter(p =>
      p.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      (!filters.category || p.category === filters.category) &&
      (!filters.minPrice || p.price >= Number(filters.minPrice)) &&
      (!filters.maxPrice || p.price <= Number(filters.maxPrice))
    )
    .sort((a, b) => {
      if (filters.sort === 'name') return a.name.localeCompare(b.name);
      if (filters.sort === 'price-desc') return b.price - a.price;
      if (filters.sort === 'category') return a.category.localeCompare(b.category);
      if (filters.sort === 'stock') return b.stock - a.stock;
      return 0;
    });

return (
    <div>
        <Filters filters={filters} setFilters={setFilters} />
        <table>
            <thead>
            <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                    <th>Stock</th>
            </tr>
            </thead>
            <tbody>
            {filtered.map(product => {
                let stockColor = 'green';
                if (product.stock === 0) stockColor = 'red';
                else if (product.stock >= 1 && product.stock <= 5) stockColor = 'orange';
                return (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>${product.price.toLocaleString()}</td>
                        <td>{product.category}</td>
                        <td style={{ color: stockColor }}>{product.stock}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    </div>
);
}
