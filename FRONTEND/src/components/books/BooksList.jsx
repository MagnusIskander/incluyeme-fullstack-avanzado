import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const BooksList = () =>
{
  const [books, setBooks] = useState([]);

  useEffect(() =>
  {
    const fetchBooks = async () =>
    {
      try
      {
        const response = await axios.get('http://localhost:8000/api/books');
        setBooks(response.data);
      }
      catch (error)
      {
        console.error('Error to get the book list:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <Link to="/create-book" className="add-book">Add Book</Link>
      <ul>
        {books.map((book) =>
          (
            <li key={book._id}>
              {book.title} - <Link to={`/books/${book._id}`}>VIEW DETAIL</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default BooksList;
