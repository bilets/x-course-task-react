import { useState } from 'react';

export default function Form({ addToCart, title, price, bookInCartHandler }) {
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    e.target.value >= 1 && e.target.value <= 42 ? setCount(e.target.value) : setCount(1);
    console.log(e);
  };

  const total = (price * count).toFixed(2);

  const handleClick = () => {
    addToCart({ title, count, total });
    setCount(1);
    bookInCartHandler();
  };

  return (
    <div className='book-buy'>
      <div className='price'>
        <p>Price, $</p>
        <p>{price}</p>
      </div>
      <div className='price'>
        <label htmlFor='count'>Count</label>
        <input onChange={handleChange} value={count} type='number' data-testid='count' />
      </div>
      <div className='price'>
        <p>Total price, $</p>
        <p data-testid='total'>{total}</p>
      </div>
      <div className='add-to-cart'>
        <button onClick={handleClick}>Add to cart</button>
      </div>
    </div>
  );
}
