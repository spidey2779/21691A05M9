import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../api/productApi';

const ProductDetailPage = () => {
  const { companyName, categoryName, productName } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        const response = await fetchProductDetails(companyName, categoryName, productName);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    loadProductDetails();
  }, [companyName, categoryName, productName]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-64 object-cover" src={product.image} alt={product.productName} />
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-2">{product.productName}</h1>
          <p className="text-gray-700 text-base mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">${product.price}</p>
          <div className="flex space-x-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              Rating: {product.rating} ★
            </span>
            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700">
              {product.discount}% Off
            </span>
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700">
              {product.availability ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;