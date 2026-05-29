import { useEffect, useState } from 'react';
import { useParams, Link, NavLink, Outlet } from 'react-router-dom';

const HostVanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState(null);

  const activeStyles = {
    fontWeight: '700',
    textDecoration: 'underline',
    color: '#161616',
  };

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, [params.id]);

  return (
    <>
      <div className='host-van-detail-container'>
        <Link to='..' relative='path' className="back-button">
          {' '}
          &larr; Back to all vans...
        </Link>

        {van ? (
          <div className='van-detain-container'>
            <div className='van-info'>
              <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
              <div className='about-van'>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h3>{van.name}</h3>
                <p>
                  ${van.price}
                  <span>/day</span>
                </p>
              </div>
            </div>

            <nav className='nav-van-details'>
              <NavLink
                to={'.'}
                style={({ isActive }) => (isActive ? activeStyles : null)}
                end
              >
                Detail
              </NavLink>
              <NavLink
                to={'price'}
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Pricing
              </NavLink>
              <NavLink
                to={'photos'}
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Photos
              </NavLink>
            </nav>
            <Outlet context={van} />
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
};

export default HostVanDetail;
