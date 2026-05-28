import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HostVans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch(`/api/host/vans`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVanElement = vans.map((van) => (
    <Link to={`/host/vans/${van.id}`} key={van.id} className='link-wrapper'>
      <div key={van.id} className='van-detail-card'>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div>
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
      </div>
    </Link>
  ));
  return (
    <>
      {vans.length > 0 ? (
        <section>
          <h2 >Your listed vans</h2>
          {hostVanElement}
        </section>
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
};

export default HostVans;
