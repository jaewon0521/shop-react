import { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { getProducts } from './api/producs';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import DetailProduct from './components/product/DetailProduct';
import { productAtom } from './module/ProductModule';
import CartPage from './page/CartPage';
import DetailProductPage from './page/DetailProductPage';
import Digital from './page/DigitalPage';
import ErrorPage from './page/ErrorPage';
import FashionPage from './page/FashionPage';
import JeweleryPage from './page/JeweleryPage';
import MainPage from './page/MainPage';

function App() {
  const [product, setProduct] = useRecoilState(productAtom);
  const getItem = async () => {
    const { data } = await getProducts();
    setProduct(data);
  };

  useEffect(() => {
    getItem();
  }, []);
  return (
    <>
      <Header />
      <section className="main pt-16">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/fashion" element={<FashionPage />} />
          <Route path="/accessory" element={<JeweleryPage />} />
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
