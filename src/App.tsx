import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CartPage from './page/CartPage';
import DetailProductPage from './page/DetailProductPage';
import Digital from './page/DigitalPage';
import ErrorPage from './page/ErrorPage';
import FashionPage from './page/FashionPage';
import AccessoryPage from './page/AccessoryPage';
import MainPage from './page/MainPage';

function App() {
  return (
    <>
      <Header />
      <section className="main pt-16">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/fashion" element={<FashionPage />} />
          <Route path="/accessory" element={<AccessoryPage />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/product/:id" element={<DetailProductPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
