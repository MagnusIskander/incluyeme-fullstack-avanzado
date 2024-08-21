import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try
    {
      const newBook = { title, author, description, year };
      await axios.post('http://localhost:8000/api/books', newBook);
      navigate('/books');
    }
    catch (error)
    {
      console.error('Error al crear el libro:', error);
    }
  };

  return (
    <div className="crear-hechizo">
      <h2>Crear Libro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Titulo</label>
          <input
            type="text"
            id="nombre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Author</label>
          <input
            type="text"
            id="autor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nivel">Year</label>
          <input
            type="text"
            id="nivel"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};


export default CreateBook;
