import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "./productForm";
import { productService } from '../services/productServiceFactory';

export default function CreateProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    cathegory: "",
    brand: "",
    stock: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ...product,
      name: product.name.trim(),
      cathegory: product.cathegory.trim(),
      brand: product.brand.trim(),
      price: Number(product.price),
      stock: Number(product.stock),
    };

    productService.create(newProduct)
      .then(() => {
        console.log("Producto creado:", newProduct);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al crear el producto:", error);
        alert("Error al crear el producto. Intente nuevamente.");
      });
   
  };

  return (
    <div className="create-product">
      <h2>Crear nuevo producto</h2>
      <ProductForm 
        product={product} 
        setProduct={setProduct} 
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
