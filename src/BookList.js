// src/Book.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Book = () => {
  const [bookData, setBookData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: { 'Authorization': 'whatever-you-want' }
    })
    .then(response => {
      setBookData(response.data.books[0]);
    })
    .catch(error => {
      setError(error);
    });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!bookData) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>{bookData.title}</h1>
        <img src={bookData.imageLinks.thumbnail} alt={bookData.title} />
        <p>{bookData.description}</p>
        <p>Authors: {bookData.authors.join(', ')}</p>
      </div>
    );
  }
};

export default Book;
