import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div>
      {van ? (
        <div className='van-detail-container'>
          <div className='van-detail'>
            <img src={van.imageUrl} alt={van.name} />
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p className="van-price">
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
