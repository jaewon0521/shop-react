import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { getIdProductsApi } from '../api/producs';
import { addCart } from '../module/CartProductModule';
import { productOnceInfo } from '../module/ProductModule';
import { getProductById } from '../service/product';
import BreadCrumb from './common/BreadCrumb';
import Star from './common/Star';

const OnLoading = () => {
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
      <div className='className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0'>
        <div
          role="status"
          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
        >
          <div className="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg
              className="w-12 h-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </section>
  );
};

const DetailProduct = () => {
  const [product, setProduct] = useRecoilState(productOnceInfo);
  const setCart = useSetRecoilState(addCart);
  const { id } = useParams();
  const { isFetching, error, data } = useQuery(
    'productById',
    () => getIdProductsApi(id!),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onSuccess({ data }) {
        setProduct(data);
      },
    },
  );

  const handleAddCart = () => {
    setCart(id!);
  };

  if (isFetching) {
    return <OnLoading />;
  }

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <div>
        <BreadCrumb name={product.name} title={product.title} />
        <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
          <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
            <img
              className="object-contain w-full h-72"
              src={product.image}
              alt={product.title}
            />
          </figure>
          <div className="card-body px-1 lg:px-12">
            <h2 className="card-title">
              {product.title}
              <span className="badge badge-accent ml-2">NEW</span>
            </h2>
            <p>{product.description}</p>
            <div className="flex items-center mt-3">
              <Star selectedStars={Number(product.rating?.rate)} />
              <div className="ml-2">
                {product.rating?.rate} / {product.rating?.count} 참여
              </div>
            </div>
            <p className="mt-2 mb-4 text-3xl">${product.price}</p>
            <div className="card-actions">
              <button onClick={handleAddCart} className="btn btn-primary">
                장바구니에 담기
              </button>
              <Link className="btn btn-outline ml-1" to="/cart">
                장바구니로 이동
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProduct;
