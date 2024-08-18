const { fetchTopProducts, fetchProductById } = require('../services/productService');

exports.getTopProducts = async (req, res) => {
    const { categoryName } = req.params;
    const { n , page , sortBy , order , minPrice, maxPrice , company } = req.query;

    const token = req.headers.authorization?.split(' ')[1];

    
    
    if (!token) {
        return res.status(400).json({ error: 'Authorization token is missing' });
    }

    try {
       
        const offset = (page - 1) * n;

     
        const products = await fetchTopProducts(company, categoryName, n, minPrice, maxPrice, token, sortBy, order, offset);

        if (products && products.length > 0) {
            res.status(200).json(products);
        } else {
            res.status(404).json({ error: 'Products not found for the specified criteria' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch top products' });
    }
};


exports.getProductById = async (req, res) => {
    const { categoryName, productId } = req.params;
    const token = req.headers.authorization?.split(' ')[1]; 

    if (!token) {
        return res.status(400).json({ error: 'Authorization token is missing' });
    }

    try {
        const product = await fetchProductById(company, categoryName, productId, token);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product details' });
    }
};
