import { Link, useLoaderData, Await } from 'react-router-dom';
import { getHostVans } from '../../api';
import { authenticationProcess } from '../../utils';
import { Suspense } from 'react';

export async function loader({ request }) {
  const authRedirect = await authenticationProcess(request);
  if (authRedirect) return authRedirect;
  return { vans: getHostVans() };
}
const HostVans = () => {
  const dataPromise = useLoaderData();

  return (
    <>
      <h2>Your listed vans</h2>
      <Suspense fallback={<h2>Loading host vans...</h2>}>
        <Await resolve={dataPromise.vans}>
          {(vans) => {
            const hostVanElement = vans.map((van) => (
              <Link to={van.id} key={van.id} className='link-wrapper'>
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
              <section className='van-display-container'>
                {hostVanElement}
              </section>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
};

export default HostVans;
