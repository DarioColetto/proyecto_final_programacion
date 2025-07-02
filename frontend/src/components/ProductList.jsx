import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import ProductItem from './ProductItem';
import Filters from './Filters';
import mockProducts from '../mocks/products';

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
      <ul>
        {filtered.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
