import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({ username, resetUsername, resetCart}) {
  return (
    <>
      <Header username={username} resetUsername={resetUsername} resetCart={resetCart} />
      <Outlet />
      <Footer />
    </>
  );
}
