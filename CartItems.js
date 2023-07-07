import React from 'react';

const CartItem = ({ item, onRemoveCartItem }) => {
  const handleRemove = () => {
    onRemoveCartItem(item.id);
  };

  return (
    <li className="cart-item">
      <div className="item-details">
        <h3>{item.title}</h3>
        <p>Author: {item.author}</p>
        <p>Price: {item.price}</p>
      </div>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default CartItem;
