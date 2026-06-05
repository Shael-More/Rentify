import { Link, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api';
import { authenticationProcess } from '../../utils';

export async function loader() {
  const authRedirect = await authenticationProcess();
  if(authRedirect) return authRedirect;
  return getHostVans();
}
const HostVans = () => {
  const vans = useLoaderData();

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
    <>
      <h2>Your listed vans</h2>
      <section className='van-display-container'>{hostVanElement}</section>
    </>
  );
};

export default HostVans;
