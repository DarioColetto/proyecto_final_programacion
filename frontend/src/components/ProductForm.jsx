import { useNavigate } from 'react-router-dom';

export default function ProductForm({ product, setProduct, handleSubmit }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: ['price', 'stock'].includes(name) ? Number(value) : value
    }));
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <label>Nombre:</label>
        <input name="name" value={product.name} onChange={handleChange} required />

        <label>Precio:</label>
        <input name="price" type="number" value={product.price} onChange={handleChange} required />

        <label>Categoría:</label>
        <input name="cathegory" value={product.cathegory} onChange={handleChange} required />
        
        <label>Marca:</label>
        <input name="brand" value={product.brand} onChange={handleChange} required />

        <label>Stock:</label>
        <input name="stock" type="number" value={product.stock} onChange={handleChange} required />
      </div>

      <button type="submit">Guardar</button>
      <button type="button" onClick={handleCancel}>Cancelar</button>
    </form>
  );
}
