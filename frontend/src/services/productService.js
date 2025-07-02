const API_URL = import.meta.env.VITE_API_URL + '/products';

/**
 * Fetches products from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of products.
 */
export const fetchProducts = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

