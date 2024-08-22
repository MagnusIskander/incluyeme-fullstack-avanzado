import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Library() {
  const [books, setBooks] = useState([]);

  useEffect(() =>
  {
    const fetchBooks = async () =>
    {
      try
      {
        const response = await axios.get('https://openlibrary.org/search.json?title=javascript');
        setBooks(response.data.docs);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>JavaScript Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.key} className="item">
            <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />
            {book.title} ({book.author_name}) - {book.first_publish_year}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Library;
