import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './books.css';


const BookDetail = () =>
{
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() =>
  {
    const fetchBook = async () =>
    {
      try
      {
        const response = await fetch(`http://localhost:8000/api/books/${id}`);
        const data = await response.json();
        setBook(data);
      }
      catch (error)
      {
        console.error('Error to get the book:', error);
      }
    };

    fetchBook();
  }, [id]);

  const handleDelete = async () =>
  {
    try
    {
      const response = await fetch(`http://localhost:8000/api/books/${id}`, {
        method: 'DELETE',
      });
      if (response.ok)
      {
        navigate('/books');
      }
      else
      {
        console.error('Error to delete the book info');
      }
    }
    catch (error)
    {
      console.error('Error to delete the book info:', error);
    }
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <div className="book-info">
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Year:</strong> {book.year}</p>
      </div>
      <div className="actions">
        <Link to={`/edit-book/${book._id}`} className="edit">EDIT</Link>
        <button onClick={handleDelete} className="delete">DELETE</button>
      </div>
    </div>
  );
};


export default BookDetail;
