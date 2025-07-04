import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import EditProduct from './components/EditProduct';
import CreateProduct from './components/CreateProduct';


function App() {
  return (
    <div className='app' >
      <h1>Gestion de produtos</h1>
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/crear-producto" element={<CreateProduct />} />
        <Route path="/editar-producto/:id" element={<EditProduct />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
