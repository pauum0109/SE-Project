import React from 'react';
import { CartProvider } from '@/context/CartContext';
import Price from './Price';

const ParentComponent = () => {
  return (
    <CartProvider>
      {/* ...existing code... */}
      <Price 
        price={100} 
        id={1} 
        title="Sample Product" 
        img="sample.jpg" 
        options={[{ title: 'Option 1', additionalPrice: 10 }]} 
      />
      {/* ...existing code... */}
    </CartProvider>
  );
};

export default ParentComponent;