import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProductsPage />} />
        <Route path="/products/:companyName/:categoryName/:productName" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;