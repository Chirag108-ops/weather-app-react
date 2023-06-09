import React from 'react';
import Loader from './Loader';
import Item from './Item';
import Error from '../../header/Error';
import { useSelector } from 'react-redux';

function Card() {
  const { data, loading, errorMsg } = useSelector((state) => state.info)

  return (
    <>
      {errorMsg !== '' ? (
        <Error />
      ) : (
        <div className="w-full max-w-[450px] bg-black/20 min-h-[584px] text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6">
          {/* Render Loader component if loading is true, otherwise render Item component */}
          {loading ? <Loader /> : <Item data={data} />}
        </div>
      )}
    </>
  );
}

export default Card;
