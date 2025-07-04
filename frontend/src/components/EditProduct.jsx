import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import mockProducts from '../mocks/products';
import ProductForm from './productForm';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const prod = mockProducts.find(p => p.id.toString() === id);
    if (prod) setProduct(prod);
    else setProduct(false); // Producto no encontrado
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Producto actualizado:", product);
    navigate('/');
  };

  if (product === false) return <p>Producto no encontrado.</p>;
  if (!product) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Editando producto: {product.name}</h2>
      <ProductForm 
        product={product}
        setProduct={setProduct}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
