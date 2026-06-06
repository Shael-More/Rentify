import { Link, NavLink, Outlet, useLoaderData, Await } from 'react-router-dom';
import { getHostVans } from '../../api';
import { authenticationProcess } from '../../utils';
import { Suspense } from 'react';

export async function loader({ params, request }) {
  await authenticationProcess(request);
  return { van: getHostVans(params.id) };
}

const HostVanDetail = () => {
  const dataPromise = useLoaderData();

  const activeStyles = {
    fontWeight: '700',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <>
      <div className='host-van-detail-container'>
        <Suspense fallback={<h2>Loading van detail....</h2>}>
          <Await resolve={dataPromise.van}>
            {(van) => {
              return (
                <>
                  <Link to='..' relative='path' className='back-button'>
                    {' '}
                    &larr; Back to all vans...
                  </Link>

                  <div className='van-detain-container'>
                    <div className='van-info' key={van.id}>
                      <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                      <div className='about-van'>
                        <i className={`van-type ${van.type} selected`}>
                          {van.type}
                        </i>
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
                        style={({ isActive }) =>
                          isActive ? activeStyles : null
                        }
                        end
                      >
                        Detail
                      </NavLink>
                      <NavLink
                        to={'price'}
                        style={({ isActive }) =>
                          isActive ? activeStyles : null
                        }
                      >
                        Pricing
                      </NavLink>
                      <NavLink
                        to={'photos'}
                        style={({ isActive }) =>
                          isActive ? activeStyles : null
                        }
                      >
                        Photos
                      </NavLink>
                    </nav>
                    <Outlet context={van} />
                  </div>
                </>
              );
            }}
          </Await>
        </Suspense>
      </div>
    </>
  );
};

export default HostVanDetail;
