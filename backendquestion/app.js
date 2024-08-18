import express from 'express';
import dotenv from 'dotenv'
import productController from './src/controllers/productController.js'
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/categories/:categoryName/products', productController.getTopProducts);
app.get('/categories/:categoryName/products/:productId', productController.getProductById);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

