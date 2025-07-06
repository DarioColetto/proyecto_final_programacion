import { useEffect, useState } from 'react';
import { productService } from '../services/productServiceFactory';
import Filters from './Filters';
import '../App.css'
import { useNavigate } from 'react-router-dom';


/**
 * 
 * @returns {JSX.Element} Lista de productos con filtros y opciones de edición/eliminación
 */
export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    category: '',
    sort: '',
    minPrice: '',
    maxPrice: ''
  });
  const navigate = useNavigate();
 

useEffect(() => {
  productService.getAll().then(setProducts);
}, []);

  /** 
   * Filtrar y ordenar productos
   * Aquí se aplica la lógica de filtrado y ordenamiento
   */
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

/**
 *  Editar un producto
 * @param {*} productId 
 */ 
const edit = (productId) => {
  navigate(`/editar-producto/${productId}`);
};

/**
 * Eliminar un producto
 * @param {*} productId 
 */
const del = (productId) => {
  if (window.confirm("¿Estás seguro de que querés eliminar este producto?")) {
    setProducts(prev => prev.filter(p => p.id !== productId));
  }
};

return (
    <div className='product-list'>
      <div>
        
      </div>
        <Filters filters={filters} setFilters={setFilters} />
        <table>
            <thead>
            <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                    <th>Stock</th>
                    <th></th>
                    <th><button className='nuevo-producto' type='button' onClick={() => navigate('/crear-producto')}>+</button></th>
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
                        <td><button className='edit' title="Editar producto" onClick={() => edit(product.id)}>✏️</button></td>
                        <td><button className='del' title="Eliminar producto" onClick={() => del(product.id)}>🗑️</button></td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    </div>
);
}
