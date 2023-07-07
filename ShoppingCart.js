import React from 'react';
import CartItem from './CartItem';

const ShoppingCart = ({ cartItems, onRemoveCartItem }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemoveCartItem={onRemoveCartItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
