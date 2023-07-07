import React from 'react';

const Book = ({ book, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(book);
  };

  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Year of Publishing: {book.publishingYear}</p>
      <p>Availability: {book.available ? 'Available' : 'Not Available'}</p>
      <p>Copies: {book.copies}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Book;
