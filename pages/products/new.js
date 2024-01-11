import { useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";

export default function NewProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  async function createProduct(ev) {
    ev.preventDefault();
    const data = { title, description, price };
    await axios.post('/api/products', data);
  }

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>Nuevo Producto</h1>
        <label>Nombre del producto</label>
        <input
          onChange={ ev => setTitle(ev.target.value) }
          placeholder="nombre de producto"
          type="text"
          value={ title }
        />
        <label>Descripción</label>
        <textarea
          onChange={ ev => setDescription(ev.target.value) }
          placeholder="descripción"
          value={ description }
        ></textarea>
        <label>Precio (MXN)</label>
        <input
          onChange={ ev => setPrice(ev.target.value) }
          placeholder="precio"
          type="text"
          value={ price }
        />
        <button
          className="button-primary"
          type="submit"
        >
          Guardar
        </button>
      </form>
    </Layout>
  );
}