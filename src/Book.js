import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Book = () => {
  const [bookData, setBookData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: { 'Authorization': 'whatever-you-want' }
    })
    .then(response => {
      setBookData(response.data.books);
    })
    .catch(error => {
      setError(error);
    });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (bookData.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>Books</h1>
        {bookData.map(book => (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <img src={book.imageLinks.thumbnail} alt={book.title} />
            <p>{book.description}</p>
            <p>Authors: {book.authors.join(', ')}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default Book;
