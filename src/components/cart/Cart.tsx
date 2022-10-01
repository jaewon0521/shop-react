import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../common/BreadCrumb';
import CountButton from '../countButton/CountButton';

const Cart = () => {
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb name="홈" title="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        <div className="lg:flex justify-between mb-20">
          <div>
            {/* map 돌리기 */}
            <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
              <Link to="">
                <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
                  <img
                    src=""
                    alt="title"
                    className="object-contain w-full h-48"
                  />
                </figure>
              </Link>
              <div className="card-body px-1 lg:px-12">
                <h2 className="card-title">
                  <Link to="">옷 이름</Link>
                </h2>
                <p className="mt-2 mb-4 text-3xl">가격</p>
                <CountButton count="0" />
              </div>
            </div>
          </div>
          <div className="self-start shrink-0 flex items-center mt-10 mb-20">
            <span className="text-xl md:text-2xl">총 : $totalPrice</span>
            <label
              htmlFor="confirm-modal"
              className="modal-button btn btn-primary ml-5"
            >
              구매하기
            </label>
          </div>
        </div>
      </div>
      <input id="confirm-modal" type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
          <p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
          <div className="modal-action">
            <label htmlFor="confirm-modal" className="btn btn-primary">
              네
            </label>
            <label htmlFor="confirm-modal" className="btn btn-outline">
              아니오
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
