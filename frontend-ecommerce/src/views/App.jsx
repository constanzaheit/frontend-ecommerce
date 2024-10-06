import React, { useState } from 'react';
import '../index.css';  // Ruta correcta al archivo de estilos
import ProductForm from '../components/ProductForm';  // Ruta correcta al componente ProductForm
import Todo from '../components/Todo';  // Ruta correcta al componente Todo

const App = () => {
  const [products, setProducts] = useState([]);  // Estado para manejar la lista de productos

  // Función para agregar un producto
  const addProduct = (product) => {
    setProducts([...products, product]);  // Añadir el producto a la lista
  };

  return (
    <div>
      <h1>Tienda de Mates</h1>
      <p>Aquí puedes agregar nuevos mates y ver la lista de productos.</p>

      {/* Formulario para agregar productos */}
      <ProductForm onAddProduct={addProduct} />

      {/* Lista de productos */}
      <Todo products={products} />
    </div>
  );
};

export default App;
