import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './books.css';


const EditBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/books/${id}`);
        const data = await response.json();
        setBook(data);
        setTitle(data.title);
        setAuthor(data.author);
        setDescription(data.description);
        setYear(data.year);
      } catch (error) {
        console.error('Error al obtener libro:', error);
      }
    };

    fetchBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/api/books/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author, description, year })
      });
      if (response.ok) {
        navigate('/books');
      } else {
        console.error('Error al actualizar libro');
      }
    } catch (error) {
      console.error('Error al actualizar libro:', error);
    }
  };

  if (!book) return <p>Cargando...</p>;

  return (
    <div className="formulario-hechizo">
      <h2>Editar Libro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Title</label>
          <input
            type="text"
            id="nombre"
            value={title}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Author</label>
          <input
            type="text"
            id="nombre"
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
            type="number"
            id="nivel"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Actualizar Libro" />
      </form>
    </div>
  );
};

export default EditBook;
