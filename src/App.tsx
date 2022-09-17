import { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { getProducts } from './api/producs';
import Header from './components/common/Header';
import DetailProduct from './components/product/DetailProduct';
import { productValue } from './module/ProductModule';
import CartPage from './page/CartPage';
import ErrorPage from './page/ErrorPage';
import MainPage from './page/MainPage';

function App() {
  const [product, setProduct] = useRecoilState(productValue);
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
      <div className="main pt-16">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
