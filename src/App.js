
import { useState, useEffect } from 'react';
import logo from './logo.svg';

import './App.css';


function App() {
  const [books, setBooks] = useState(null);

  // + adding the use
  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch("https://www.anapioficeandfire.com/api/books");
      const data = await response.json();

      // store the data into our books variable
      setBooks(data) ;
    }
  }, []); // <- you may need to put the setBooks function in this array

  
   return (
  <div>
    <h1>Game of Thrones Books</h1>

    
    {books && (
      <div className="books">

        
        {books.map((book, index) => (
          <div key={index}>
            <h2>{book.name}</h2>
          </div>
        ))}

      </div>
    )}
  </div>

  )
}

export default App;

