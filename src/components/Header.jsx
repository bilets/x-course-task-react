import { useNavigate, Link } from 'react-router-dom';
import cart from '../images/cart.svg';
import avatar from '../images/avatar.png';

export default function Header({ username, resetUsername, resetCart }) {
  const navigate = useNavigate();
  if (!username) {
    return (
      <header className='header'>
        <h1>JS BAND STORE</h1>
      </header>
    );
  }

  return (
    <header className='header'>
      <h1>JS BAND STORE</h1>

      <nav>
        <Link to='/cart'>
          <img className='cart-img' src={cart} alt='cart' />
        </Link>

        <button
          onClick={() => {
            navigate('/');
            resetUsername();
            resetCart();
          }}
          type='submit'
        >
          Sign-out
        </button>
        <img src={avatar} alt='avatar' height='50' />

        <p>{username}</p>
      </nav>
    </header>
  );
}
