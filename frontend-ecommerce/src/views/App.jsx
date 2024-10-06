import React, { useState } from 'react';
import '../index.css';
import Form from '../components/Form';
import Todo from '../components/Todo';

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1>Tienda de Mates</h1>
      <p>Aquí puedes agregar nuevos mates y ver la lista de productos.</p>

      <Form onAddProduct={addProduct} />
      <Todo products={products} onDeleteProduct={deleteProduct} />
    </div>
  );
};

export default App;
