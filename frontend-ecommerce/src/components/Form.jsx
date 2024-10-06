import React, { useState } from 'react';
import Todo from './Todo';  // Importa el componente Todo

const Form = () => {
  const [todos, setTodos] = useState([]);  // Maneja la lista de productos/tareas
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [material, setMaterial] = useState('');
  const [color, setColor] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      description,
      price,
      material,
      color,
      stock
    };
    setTodos([...todos, newTodo]);  // Añade el nuevo producto a la lista
    // Limpia el formulario
    setDescription('');
    setPrice('');
    setMaterial('');
    setColor('');
    setStock('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción del mate"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Precio"
          required
        />
        <input
          type="text"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          placeholder="Material"
          required
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Color"
          required
        />
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock disponible"
          required
        />
        <button type="submit">Agregar Producto</button>
      </form>

      {/* Renderiza el componente Todo y pasa la lista de productos */}
      <Todo todos={todos} />
    </div>
  );
};

export default Form;
