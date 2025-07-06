import { ApiProductService } from './ApiProductService';
import { MockProductService } from './MockProductService';

const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true';

export const productService = USE_MOCK
  ? new MockProductService()
  : new ApiProductService();
