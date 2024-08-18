import axios from 'axios';

const api = axios.create({
//   baseURL: 'http://20.244.56.144/test',
  baseURL: 'http://localhost:3000/test',
});

// Fetch top N products based on company, category, price range
export const fetchTopProducts = (companyName, categoryName, topN, minPrice, maxPrice) => {
  return api.get(`/companies/${companyName}/categories/${categoryName}/products`, {
    params: {
      top: topN,
      minPrice: minPrice,
      maxPrice: maxPrice,
    },
  });
};
// Fetch product details by product name
export const fetchProductDetails = (companyName, categoryName, productName) => {
    return api.get(`/companies/${companyName}/categories/${categoryName}/products/${productName}`);
  };