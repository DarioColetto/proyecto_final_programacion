export default function Filters({ filters, setFilters }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={filters.name}
        onChange={e => setFilters({ ...filters, name: e.target.value })}
      />

      <select onChange={e => setFilters({ ...filters, category: e.target.value })}>
        <option value="">Todas las categorías</option>
        <option value="Electrónica">Electrónica</option>
        <option value="Ropa">Ropa</option>
      </select>

      <select onChange={e => setFilters({ ...filters, sort: e.target.value })}>
        <option value="">Ordenar por</option>
        <option value="name">Nombre</option>
        <option value="price-desc">Precio (desc)</option>
        <option value="category">Categoría</option>
        <option value="stock">Stock disponible</option>
      </select>

      <input
        type="number"
        placeholder="Precio mínimo"
        onChange={e => setFilters({ ...filters, minPrice: e.target.value })}
      />
      <input
        type="number"
        placeholder="Precio máximo"
        onChange={e => setFilters({ ...filters, maxPrice: e.target.value })}
      />
    </div>
  );
}
