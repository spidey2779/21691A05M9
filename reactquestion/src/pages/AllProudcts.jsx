import  { useState, useEffect } from 'react';
import { fetchTopProducts } from '../api/productApi';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: 'AMZ',
    category: 'Laptop',
    topN: 10,
    minPrice: 1,
    maxPrice: 10000,
  });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetchTopProducts(
          filters.company,
          filters.category,
          filters.topN,
          filters.minPrice,
          filters.maxPrice
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  return (
    <div className="container mx-auto p-4">
      <FilterBar onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {products.map(product => (
          <ProductCard key={product.productName} product={product} />
        ))}
      </div>
      {/* Add Pagination here if needed */}
    </div>
  );
};

export default AllProductsPage;