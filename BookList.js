import React from 'react';
import Book from './Book';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
