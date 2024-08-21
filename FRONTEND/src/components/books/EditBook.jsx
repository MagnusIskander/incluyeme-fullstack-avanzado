import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './books.css';


const EditBook = () =>
{
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
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
        setTitle(data.title);
        setAuthor(data.author);
        setDescription(data.description);
        setYear(data.year);
      }
      catch (error)
      {
        console.error('Error to get the book:', error);
      }
    };

    fetchBook();
  }, [id]);

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    try
    {
      const response = await fetch(`http://localhost:8000/api/books/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author, description, year })
      });
      if (response.ok)
      {
        navigate('/books');
      }
      else
      {
        console.error('Error to update the book');
      }
    }
    catch (error)
    {
      console.error('Error to update the book:', error);
    }
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-form">
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="EDIT BOOK" />
      </form>
    </div>
  );
};

export default EditBook;
