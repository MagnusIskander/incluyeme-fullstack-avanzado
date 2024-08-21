import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './books.css';


const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/books/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error al obtener libro:', error);
      }
    };

    fetchBook();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/books/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        navigate('/books');
      } else {
        console.error('Error al eliminar libro');
      }
    } catch (error) {
      console.error('Error al eliminar libro:', error);
    }
  };

  if (!book) return <p>Cargando...</p>;

  return (
    <div className="detalle-libro">
      <h2>{book.title}</h2>
      <div className="libro-info">
        <p><strong>Autor:</strong> {book.author}</p>
        <p><strong>Descripción:</strong> {book.description}</p>
        <p><strong>Año:</strong> {book.year}</p>
      </div>
      <div className="acciones">
        <Link to={`/edit-book/${book._id}`} className="editar">Editar</Link>
        <button onClick={handleDelete} className="eliminar">Eliminar</button>
      </div>
    </div>
  );
};


export default BookDetail;
