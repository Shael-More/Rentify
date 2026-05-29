import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const VanDetail = () => {
  const params = useParams();
  const location = useLocation();
  console.log(location)
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const search = location.state?.search || '';
  const type = location.state?.type || 'all';

  return (
    <div className='detail-about-van-container'>
      <Link to={`..${search}`} relative='path' className='back-button'>
        `&larr; Back to {type} vans...`
      </Link>
      {van ? (
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
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
