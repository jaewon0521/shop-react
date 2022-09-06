import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import CartPage from './page/CartPage';
import ErrorPage from './page/ErrorPage';
import MainPage from './page/MainPage';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
