import React from 'react';

const Todo = ({ products }) => {
  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          <h3>{product.description}</h3>
          <p>Precio: ${product.price}</p>
          <p>Material: {product.material}</p>
          <p>Color: {product.color}</p>
          <p>Stock: {product.stock}</p>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
