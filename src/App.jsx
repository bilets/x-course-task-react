import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import CartContext from './context/CartContext';
import MainLayout from './routes/MainLayout';
import SignIn from './routes/SignIn';
import BookList from './routes/BookList';
import SpecificBook from './routes/SpecificBook';
import Cart from './routes/Cart';
import NotFoundPage from './routes/NotFoundPage';
import './App.css';

export default function App() {
  const [username, setUsername] = useState('');
  const addUsernameHandler = (e) => {
    setUsername(e);
  };
  const resetUsernameHandler = () => {
    setUsername('');
  };
  const [cart, setCart] = useState([]);

  const addToCartHandler = (e) => {
    let f = false;
    !cart.length
      ? setCart([e])
      : cart.forEach((item) => {
          if (item.title === e.title) {
            item.count = Number.parseFloat(item.count) + Number.parseInt(e.count);
            item.total = (Number.parseFloat(item.total) + Number.parseFloat(e.total)).toFixed(2);
            f = true;
          }
        });
    f ? setCart(cart) : setCart([...cart, e]);
  };

  const resetCartHandler = () => {
    setCart([]);
  };
  return (
    <div className='App'>
      <CartContext.Provider value={cart}>
        <HashRouter>
          <Routes>
            <Route
              path='/'
              element={
                <MainLayout
                  username={username}
                  resetUsername={resetUsernameHandler}
                  resetCart={resetCartHandler}
                />
              }
            >
              <Route index element={<SignIn addUsername={addUsernameHandler} />} />

              <Route path='books' element={username ? <BookList /> : <Navigate to='/' />} />
              <Route
                path='books/:title'
                element={
                  username ? <SpecificBook addToCart={addToCartHandler} /> : <Navigate to='/' />
                }
              />
              <Route
                path='cart'
                element={username ? <Cart resetCart={resetCartHandler} /> : <Navigate to='/' />}
              />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </HashRouter>
      </CartContext.Provider>
    </div>
  );
}
