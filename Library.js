import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../services/api';
import LoadingAnimation from '../components/LoadingAnimation';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import FilterOptions from '../components/FilterOptions';
import './App.css'

const Library = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    // Fetch books from the API
    const fetchBooksData = async () => {
      try {
        const response = await fetchBooks();
        console.log(response)
        setBooks(response.books);
        setFilteredBooks(response.books);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooksData();
  }, []);

  useEffect(() => {
    // Perform filtering based on search term and filter option
    const filterBooks = () => {
      let filteredResults = [...books];

      if (searchTerm) {
        const searchRegex = new RegExp(searchTerm, 'i');
        filteredResults = filteredResults.filter((book) =>
          Object.values(book).some((value) => searchRegex.test(value))
        );
      }

      if (filter) {
        filteredResults = filteredResults.filter((book) =>
          book[filter]?.toLowerCase().includes(filter.toLowerCase())
        );
      }

      if (sort) {
        filteredResults.sort((a, b) => {
          if (sort === 'asc') {
            return a.title.localeCompare(b.title);
          } else if (sort === 'desc') {
            return b.title.localeCompare(a.title);
          }
          return 0;
        });
      }

      setFilteredBooks(filteredResults);
    };

    filterBooks();
  }, [books, searchTerm, filter, sort]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const handleSortChange = (selectedSort) => {
    setSort(selectedSort);
  };

  return (
    <div className="library">
      <h2>Library</h2>
      <SearchBar onSearch={handleSearch} />
      <FilterOptions
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      {loading ? <LoadingAnimation /> : <BookList books={filteredBooks} />}
    </div>
  );
};

export default Library;
