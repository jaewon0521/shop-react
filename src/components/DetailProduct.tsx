import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { getIdProductsApi } from '../api/producs';
import { addCart } from '../module/CartProductModule';
import { productOnceInfo } from '../module/ProductModule';
import BreadCrumb from './common/BreadCrumb';
import Star from './common/Star';

const DetailProduct = () => {
  const [product, setProduct] = useRecoilState(productOnceInfo);
  const setCart = useSetRecoilState(addCart);
  const { id } = useParams();

  const getByProductId = () => {};

  const handleAddCart = () => {
    setCart(id!);
  };

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
