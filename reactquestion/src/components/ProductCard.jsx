/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.company}/${product.category}/${product.productName}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
        <img className="w-full h-48 object-cover" src={product.image} alt={product.productName} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.productName}</div>
          <p className="text-gray-700 text-base">${product.price}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {product.rating} ★
          </span>
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2">
            {product.discount}% Off
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;