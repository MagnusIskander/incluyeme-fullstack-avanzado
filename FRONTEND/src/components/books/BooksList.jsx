import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try
      {
        const response = await axios.get('http://localhost:8000/api/books');
        setBooks(response.data);
      }
      catch (error)
      {
        console.error('Error al obtener los libros:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Lista de Libros</h1>
      <Link to="/create-book" className="crear-libro">Crear nuevo Libro</Link>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} - <Link to={`/books/${book._id}`}>Ver Detalle</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
