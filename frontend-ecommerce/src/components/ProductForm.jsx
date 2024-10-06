import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [material, setMaterial] = useState('');
  const [color, setColor] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      description.trim() === '' ||
      price.trim() === '' ||
      material.trim() === '' ||
      color.trim() === '' ||
      stock.trim() === ''
    ) {
      alert('Por favor, completa todos los campos');
      return;
    }

    const newProduct = {
      description,
      price: parseFloat(price),
      material,
      color,
      stock: parseInt(stock),
    };

    onAddProduct(newProduct);

    // Limpiar los campos
    setDescription('');
    setPrice('');
    setMaterial('');
    setColor('');
    setStock('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Material"
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
      />
      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <button type="submit">Agregar Mate</button>
    </form>
  );
};

export default ProductForm;
