export default function Filters({ filters, setFilters }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Buscar por nombre"
         name="name-filter"
        value={filters.name}
        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
      />

      <select name="category"
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      >
        <option value="">Todas las categorías</option>
        <option value="Electrónica">Electrónica</option>
        <option value="Ropa">Ropa</option>
      </select>

      <select name="sort-by"
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
      >
        <option value="">Ordenar por</option>
        <option value="name">Nombre</option>
        <option value="price-desc">Precio (desc)</option>
        <option value="cathegory">Categoría</option>
        <option value="stock">Stock disponible</option>
        <option value="brand">Marca</option>
      </select>

      <div>
        <input
          type="number"
          placeholder="Precio mínimo"
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
        />
        <input
          type="number"
          placeholder="Precio máximo"
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
        />
      </div>
    </div>
  );
}
