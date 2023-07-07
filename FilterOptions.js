import React from 'react';

const FilterOptions = ({ onFilterChange, onSortChange }) => {
  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    onFilterChange(selectedFilter);
  };

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    onSortChange(selectedSort);
  };

  return (
    <div className="filter-options">
      <select onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="genre">Genre</option>
        <option value="publishing-year">Publishing Year</option>
      </select>
      <select onChange={handleSortChange}>
        <option value="">None</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="genre">Genre</option>
        <option value="publishing-year">Publishing Year</option>
      </select>
    </div>
  );
};

export default FilterOptions;
