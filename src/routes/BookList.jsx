import { useState, useContext } from 'react';
import BooksContext from '../context/BooksContext';
import BookSearch from '../components/BookSearch';
import BookSelect from '../components/BookSelect';
import Books from '../components/Books';

export default function BookList() {
  const BOOKS = useContext(BooksContext);
  const [books, setBooks] = useState(BOOKS);
  const searchBooksHandler = (e) => {
    setBooks(BOOKS.filter((book) => book.title.toLowerCase().includes(e.toLowerCase())));
  };
  const selectBooksHandler = (e) => {
    setBooks(
      BOOKS.filter((book) => {
        if (e == 1) return book.price;
        if (e == 2) return book.price > 0 && book.price < 15;
        if (e == 3) return book.price > 15 && book.price < 30;
        if (e == 4) return book.price > 30;
      })
    );
  };

  return (
    <div className='body'>
      <div className='book-search'>
        <BookSearch searchBooks={searchBooksHandler} />
        <BookSelect selectBooks={selectBooksHandler} />
      </div>
      <Books books={books} />
    </div>
  );
}
