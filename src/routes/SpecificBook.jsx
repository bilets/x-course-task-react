import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import BooksContext from '../context/BooksContext';
import CartContext from '../context/CartContext';
import NotFoundPage from './NotFoundPage';
import imageNotFound from '../images/imageNotFound.png';
import Form from '../components/Form';

export default function SpecificBook({ addToCart }) {
  const BOOKS = useContext(BooksContext);
  const cart = useContext(CartContext);
  const params = useParams();
  const book = BOOKS.find((book) => book.title === params.title);
  const bookInCartCount = cart.find((bookInCart) => bookInCart.title === params.title)?.count;

  const title = book.title;
  const price = book.price;

  console.log('render SpecificBook');

  if (!book) {
    return <NotFoundPage />;
  }

  return (
    <div className='body'>
      <div className='specific-book'>
        <img
          className='book-cover'
          src={book.image ? book.image : imageNotFound}
          alt='imageNotFound'
        />

        <div className='book-summary'>
          <p>
            Book name: <i>{title}</i>
          </p>
          <p>
            Book author: <i>{book.author}</i>
          </p>
          <p>Book in cart: {bookInCartCount ? bookInCartCount : 0}</p>
        </div>

        <Form addToCart={addToCart} title={title} price={price} />
      </div>
      <div className='specific-book-description'>
        <b>Description:</b>
        <div>{book.description}</div>
      </div>
    </div>
  );
}
