import { createContext } from 'react';
import booksJson from '../data/books.json';

const BooksContext = createContext(booksJson['books']);

export default BooksContext;
