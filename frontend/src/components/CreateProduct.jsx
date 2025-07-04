import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "./productForm"; // Corregido
import mockProducts from "../mocks/products";

export default function CreateProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ...product,
      name: product.name.trim(),
      category: product.category.trim(),
      price: Number(product.price),
      stock: Number(product.stock),
      id: Date.now(), // Simulamos ID único
    };

    console.log("Producto creado:", newProduct);
    mockProducts.push(newProduct); // Simular persistencia temporal
    navigate("/");
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
