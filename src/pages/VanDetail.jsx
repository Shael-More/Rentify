// import { useState, useEffect } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { getVansData } from '../api';

export async function loader({ params }) {
  return getVansData(params.id);
}

const VanDetail = () => {
  const location = useLocation();
  const van = useLoaderData();

  const search = location.state?.search || '';
  const type = location.state?.type || 'all';

  return (
    <div className='detail-about-van-container'>
      <Link to={`..${search}`} relative='path' className='back-button'>
        `&larr; Back to {type} vans...`
      </Link>
      <div className='van-detail-container'>
        <img src={van.imageUrl} alt={van.name} />
        <div className='van-detail'>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className='van-price'>
            ${van.price}
            <span>/day</span>
          </p>
          <p>{van.description}</p>
          <button className='link-button'>Rent this van</button>
        </div>
      </div>
    </div>
  );
};

export default VanDetail;
