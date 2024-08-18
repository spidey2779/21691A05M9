const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const { paginate } = require('../utils/paginator');

const BASE_URL = 'http://20.244.56.144/test';

exports.fetchTopProducts = async (company, categoryName, n, minPrice, maxPrice, sortBy, order, page) => {
    const url = `${BASE_URL}/companies/${company}/categories/${categoryName}/products/top-${n}minPrice-${minPrice}&maxPrice-${maxPrice}`;

    try {
        const response = await axios.get(url);
        let products = response.data;

        // Generate unique IDs for each product
        products = products.map(product => ({
            id: uuidv4(),
            ...product
        }));

        // Sort the products
        products.sort((a, b) => {
            let compareA = a[sortBy];
            let compareB = b[sortBy];
            return order === 'asc' ? compareA - compareB : compareB - compareA;
        });

        // Paginate the products
        const paginatedProducts = paginate(products, n, page);

        return {
            products: paginatedProducts,
            totalPages: Math.ceil(products.length / n),
            currentPage: page
        };
    } catch (error) {
        console.error('Error fetching top products:', error);
        throw error;
    }
};

exports.fetchProductById = async (categoryName, productId) => {
    // Implement logic to fetch product by ID from your data source
    // This is a placeholder since the exact requirement for this is unclear
    return null;
};
