import { useContext } from 'react';
import CartContext from '../context/CartContext';
import BookCart from '../components/BookCart';
import cartImg from '../images/cart.svg';

export default function Cart({ resetCart }) {
  const cart = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + Number.parseFloat(item.total), 0).toFixed(2);
  return (
    <div className='body'>
      <button className='cart-button' disabled={!cart[0]} onClick={resetCart}>
        Purchase
      </button>
      {cart.map((book, index) => {
        return <BookCart key={index} {...book} />;
      })}
      {cart[0] && <h4 className='cart total'>Total price, $ {total}</h4>}
      {!cart[0] && (
        <div className='cart-empty'>
          <img className='cart-empty' src={cartImg} alt='cart' />
          <h3>Cart empty...</h3>
        </div>
      )}
    </div>
  );
}
