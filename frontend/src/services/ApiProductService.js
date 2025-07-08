import { ProductService } from './ProductService.js';

const API_URL = import.meta.env.VITE_API_URL;

export class ApiProductService extends ProductService {
  async getAll() {
    const res = await fetch(`${API_URL}/products`);
    return res.json();
  }

  async getById(id) {
    const res = await fetch(`${API_URL}/products/${id}`);
    return res.json();
  }

  async create(product) {
    const res = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
    return res.json();
  }

  async update(id, product) {
    const res = await fetch(`${API_URL}/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });

  
    return res.json();
  }

  async delete(id) {
    const res = await fetch(`${API_URL}/products/${id}`, { method: 'DELETE' });

   return res.json()
  }

}
