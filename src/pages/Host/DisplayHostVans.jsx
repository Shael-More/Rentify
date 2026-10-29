import { Link, useLoaderData, Await } from 'react-router-dom';
import { getHostVans } from '../../api';
import { authenticationProcess } from '../../utils';
import { Suspense } from 'react';
import { BedDouble, Calendar, ShieldCheck, SlidersHorizontal, Star } from 'lucide-react';

export async function loader({ request }) {
  const authRedirect = await authenticationProcess(request);
  if (authRedirect) return authRedirect;
  return { vans: getHostVans() };
}

const HostVans = () => {
  const dataPromise = useLoaderData();

  return (
    <section className="display-hostVans">
      <h2>Your listed vans</h2>
      <Suspense fallback={<h2>Loading host vans...</h2>}>
        <Await resolve={dataPromise.vans}>
          {(vans) => {
            const hostVanElement = vans.map((van) => (
              <Link to={van.id} key={van.id} className='link-wrapper'>
                <article className='van-card'>
                  <div className='van-card__media'>
                    <img
                      className='van-card__img'
                      src={van.imageUrl}
                      alt={van.name}
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                    <span
                      className={`van-card__status van-card__status--${van.status}`}
                    >
                      <span className='van-card__status-dot' />
                      {van.statusLabel}
                    </span>
                    <span className='van-card__specs'>
                      <span className='van-card__spec'>
                        <BedDouble size={14} /> Sleeps {van.sleeps}
                      </span>
                      <span className='van-card__spec-divider' />
                      <span className='van-card__spec'>{van.drive}</span>
                    </span>
                  </div>

                  <div className='van-card__body'>
                    <header className='van-card__head'>
                      <div>
                        <p className='van-card__model'>{van.model}</p>
                        <h3 className='van-card__name'>{van.name}</h3>
                      </div>
                      <p className='van-card__price'>
                        <span className='van-card__amount'>${van.price}</span>
                        <span className='van-card__unit'>/ night</span>
                      </p>
                    </header>

                    <dl className='van-card__stats'>
                      <div className='van-card__stat'>
                        <dt className='van-card__stat-value'>{van.trips}</dt>
                        <dd className='van-card__stat-label'>Trips</dd>
                      </div>
                      <div className='van-card__stat van-card__stat--highlight'>
                        <dt className='van-card__stat-value'>
                          <Star
                            size={13}
                            className='van-card__star'
                            fill='currentColor'
                          />{' '}
                          {van.rating}
                        </dt>
                        <dd className='van-card__stat-label'>
                          {van.reviews} reviews
                        </dd>
                      </div>
                      <div className='van-card__stat'>
                        <dt className='van-card__stat-value'>
                          {van.occupancy}%
                        </dt>
                        <dd className='van-card__stat-label'>Occupancy</dd>
                      </div>
                    </dl>

                    <div className='van-card__actions'>
                      <button
                        type='button'
                        className='van-card__btn'
                        onClick={() => alert("Calendar")}
                      >
                        <Calendar size={14} /> Calendar
                      </button>
                      <button
                        type='button'
                        className='van-card__btn'
                        onClick={() => alert("Rates")}
                      >
                        <SlidersHorizontal size={14} /> Rates
                      </button>
                      <button
                        type='button'
                        className='van-card__btn'
                        onClick={() => alert("Health")}
                      >
                        <ShieldCheck size={14} /> Health
                      </button>
                    </div>
                  </div>
                </article>
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
    </section>
  );
};

export default HostVans;
