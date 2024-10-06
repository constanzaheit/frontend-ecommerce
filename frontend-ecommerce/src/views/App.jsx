import React, { useState } from 'react';
import '../index.css';  
import Form from '../components/Form';  // Asegúrate de que Form esté correctamente capitalizado
import Todo from '../components/Todo';  

const App = () => {
  const [products, setProducts] = useState([]);  

  const addProduct = (product) => {
    setProducts([...products, product]);  
  };

  return (
    <div>
      <h1>Tienda de Mates</h1>
      <p>Aquí puedes agregar nuevos mates y ver la lista de productos.</p>

      {/* Formulario para agregar productos */}
      <Form onAddProduct={addProduct} /> {/* Cambié ProductForm a Form */}

      {/* Lista de productos */}
      <Todo products={products} />
    </div>
  );
};

export default App;
