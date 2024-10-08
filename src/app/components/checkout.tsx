import React, { useState } from 'react';

interface CartItem {
  name: string;
  price: number;
}

interface CheckoutProps {
  cartItems: CartItem[];
  isVisible: boolean;
}

export default function Checkout({ cartItems, isVisible }: CheckoutProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`fixed top-0 right-0 h-full w-64 bg-gray-100 p-4 shadow-lg transition-transform duration-300 ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <h2 className="text-xl font-bold">Cart</h2>
      <ul className="mt-4">
        {cartItems.map((item, index) => (
          <li key={index} className="mb-2">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
        <button className="bg-blue-500 text-white p-2 rounded-md w-full mt-2">Checkout</button>
      </div>
    </div>
  );
}

