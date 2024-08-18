/* eslint-disable react/prop-types */
const FilterBar = ({ onFilterChange }) => {
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      onFilterChange({ [name]: value });
    };
  
    return (
      <div className="flex space-x-4 p-4 bg-gray-100">
        <select name="company" className="p-2 border rounded" onChange={handleInputChange}>
          <option value="AMZ">Amazon</option>
          <option value="FLP">Flipkart</option>
          <option value="SNP">Snapdeal</option>
          <option value="MYN">Myntra</option>
          <option value="AZO">Azo</option>
        </select>
  
        <select name="category" className="p-2 border rounded" onChange={handleInputChange}>
          <option value="Laptop">Laptop</option>
          <option value="Phone">Phone</option>
          <option value="TV">TV</option>
          <option value="Earphone">Earphone</option>
          {/* Add more categories as needed */}
        </select>
  
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          className="p-2 border rounded"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          className="p-2 border rounded"
          onChange={handleInputChange}
        />
      </div>
    );
  };
  
  export default FilterBar;