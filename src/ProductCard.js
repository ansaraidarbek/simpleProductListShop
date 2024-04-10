import React from 'react';
import { useProductContext } from './home';
import './styles.css';

const ProductCard = ({ product }) => {
  const { textStyle, textColor } = useProductContext();

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h2 style={{ fontStyle: textStyle, color: textColor }}>{product.title}</h2>
      <p style={{ fontStyle: textStyle, color: textColor }}>{product.brand}</p>
      <p style={{ fontStyle: textStyle, color: textColor }}>Price: {product.price}</p>
      <p style={{ fontStyle: textStyle, color: textColor }}>Discount: {product.discount}</p>
      <p style={{ fontStyle: textStyle, color: textColor }}>{product.category}</p>
      <p style={{ fontStyle: textStyle, color: textColor }}>{product.description}</p>
    </div>
  );
};

export default ProductCard;
