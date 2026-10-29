import { Suspense } from 'react';
import { Link, Await, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api';
import { authenticationProcess } from '../../utils';
// import { BsStarFill } from 'react-icons/bs';
import {
  Calendar,
  CalendarX,
  Plus,
  SlidersHorizontal,
  Star,
  Wrench,
} from 'lucide-react';

import hostData from './hostData';

export async function loader({ request }) {
  await authenticationProcess(request);
  return { vans: getHostVans() };
}

export default function Dashboard() {
  const { host, stats, expeditions, fleet, recent } = hostData;
  const loaderDataPromise = useLoaderData();
  // console.log('loaderDataPromise:', loaderDataPromise); // ← add this
  if (!loaderDataPromise) return null;

  // function renderVanElements(vans) {
  //   const hostVansEls = vans.map((van) => (
  //   <div className='host-van-single' key={van.id}>
  //     <div>
  //       <img
  //         src={van.imageUrl}
  //         alt={`Photo of ${van.name}`}
  //         className='vans-images'
  //       />
  //       <div className='host-van-info'>
  //         <h3>{van.name}</h3>
  //         <p>${van.price}/day</p>
  //       </div>
  //     </div>

  //     <Link to={`vans/${van.id}`}>View</Link>
  //   </div>
  //   ));

  //   return (
  //     <div className='host-vans-list'>
  //       <section>{hostVansEls}</section>
  //     </div>
  //   );
  // }

  return (
    <>
      <section className='host-pagehead'>
        <div>
          <p className='host-eyebrow'>
            <span className='host-eyebrow__accent'>Superhost</span>
            <span className='host-dot' />
            <span>{host.depot}</span>
          </p>
          <h1 className='host-title'>Dashboard</h1>
        </div>
        <div className='host-pagehead__actions'>
          <button className='host-btn host-btn--outline'>
            <Calendar size={16} /> Calendar
          </button>
          <button className='host-btn host-btn--primary'>
            <Plus size={16} /> New Booking
          </button>
        </div>
      </section>

      <section className='host-stats' aria-label='Key metrics'>
        <article className='host-card host-stat'>
          <p className='host-stat__label'>Revenue (MTD)</p>
          <p className='host-stat__value'>
            {stats.revenue.value}
            <span className='host-stat__note'>{stats.revenue.note}</span>
          </p>
        </article>
        <article className='host-card host-stat'>
          <p className='host-stat__label'>Occupancy</p>
          <p className='host-stat__value'>
            {stats.occupancy.value}
            <span className='host-stat__note'>{stats.occupancy.note}</span>
          </p>
        </article>
        <article className='host-card host-stat'>
          <p className='host-stat__label'>Active trips</p>
          <p className='host-stat__value'>
            {stats.activeTrips.value}
            <span className='host-stat__note'>
              {stats.activeTrips.note}
            </span>
          </p>
        </article>
        <article className='host-card host-stat'>
          <p className='host-stat__label'>Guest rating</p>
          <p className='host-stat__value'>
            {stats.rating.value}

            <Star size={20} className='host-stat__star' />
          </p>
        </article>
      </section>

      <div className='host-grid'>
        <section>
          <div className='host-section-head'>
            <h2 className='host-section-title'>
              Upcoming Expeditions <span className='host-count'>(3)</span>
            </h2>
            <a href='#all' className='host-text-link'>
              View all
            </a>
          </div>
          <ul className='host-card host-list'>
            {expeditions.map((e) => (
              <li key={e.id} className='host-trip'>
                {/* <span className='host-avatar'>{initials(e.guest)}</span> */}
                <div className='host-trip__info'>
                  <p className='host-trip__guest'>
                    {e.guest}{' '}
                    <span className={`host-pill host-pill--${e.status}`}>
                      {e.label}
                    </span>
                  </p>
                  <p className='host-trip__van'>{e.van}</p>
                </div>
                <div className='host-trip__money'>
                  <p className='host-trip__amount'>{e.amount}</p>
                  <p className='host-trip__dates'>{e.dates}</p>
                </div>
                <button className='host-btn host-btn--soft'>{e.action}</button>
              </li>
            ))}
          </ul>

          <div className='host-quick'>
            <button className='host-quick__item'>
              <CalendarX size={16} /> Block Dates
            </button>
            <button className='host-quick__item'>
              <SlidersHorizontal size={16} /> Rates
            </button>
            <button className='host-quick__item'>
              <Wrench size={16} /> Service
            </button>
          </div>
        </section>

        <aside>
          <div className='host-section-head'>
            <h2 className='host-section-title'>Fleet Status</h2>
            <span className='host-eyebrow__accent host-small-caps'>
              {fleet.length} Active
            </span>
          </div>
          <ul className='host-card host-panel'>
            {fleet.map((v) => (
              <li key={v.id} className='host-row'>
                <div>
                  <p className='host-row__title'>{v.name}</p>
                  <p className='host-row__sub'>{v.note}</p>
                </div>
                <span className={`host-status host-status--${v.status}`}>
                  {v.label}
                </span>
              </li>
            ))}
          </ul>

          <div className='host-section-head host-section-head--spaced'>
            <h2 className='host-section-title host-section-title--small'>
              Recent
            </h2>
            <a href='#all' className='host-text-link'>
              All
            </a>
          </div>
          <ul className='host-card host-panel'>
            {recent.map((r) => (
              <li key={r.id} className='host-row host-row--top'>
                <div>
                  <p className='host-row__title host-row__title--small'>
                    {r.title}
                  </p>
                  <p className='host-row__sub'>{r.detail}</p>
                </div>
                <span className='host-row__time'>{r.time}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* <section className='host-dashboard-earnings'>
        <div className='info'>
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to='income'>Details</Link>
      </section>
      <section className='host-dashboard-reviews'>
        <h2>Review score</h2>
        <BsStarFill className='star' />
        <p>
          <span>5.0</span>/5
        </p>
        <Link to='reviews'>Details</Link>
      </section> */}
      {/* <section className='host-dashboard-vans'>
        <div className='top'>
          <h2>Your listed vans</h2>
          <Link to='vans'>View all</Link>
        </div>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Await resolve={loaderDataPromise.vans}>{renderVanElements}</Await>
        </Suspense>
      </section> */}
    </>
  );
}
