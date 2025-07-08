import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { productService } from '../services/productServiceFactory';
import ProductForm from './productForm';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    productService.getById(id)
      .then((data) => {
        if (data) {
          setProduct(data);
        } else {
          setProduct(false); // Producto no encontrado
        }
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
        setProduct(false); // Manejo de error
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      name: product.name.trim(),
      cathegory: product.cathegory.trim(),
      brand: product.brand.trim(),
      price: Number(product.price),
      stock: Number(product.stock),
    };

    

    productService.update(id, updatedProduct)
      .then((res) => {
   
       
      if (!res.ok){

        throw new Error( res.mensaje +': ' + res.detalles );
      }
        console.log("Producto actualizado:", updatedProduct);
         navigate('/'); // Redirigir a la lista de productos
  
      })
      .catch((error) => {
        console.error(error.message);
        alert(error.message);
      });
 
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
