import { ProductService } from './ProductService';
import mockData from '../mocks/products';

export class MockProductService extends ProductService {
  constructor() {
    super();
    this.products = [...mockData];
    this.nextId = this.products.length + 1;
    console.warn("Using MockProductService. Data will not persist.");
  }

  async getAll() {
    return this.products;
  }

  async getById(id) {
    return this.products.find(p => p.id === Number(id));
  }

  async create(product) {
    const newProduct = { ...product, id: this.nextId++ };
    this.products.push(newProduct);
    return newProduct;
  }

  async update(id, product) {
    const index = this.products.findIndex(p => p.id === Number(id));
    if (index !== -1) this.products[index] = { ...this.products[index], ...product };
  }

  async delete(id) {
    this.products = this.products.filter(p => p.id !== Number(id));
  }
}
