import VanInfo from './VanInfo';
import { useLoaderData, useSearchParams, Await } from 'react-router-dom';
import { getVansData } from '../api';
import { Suspense } from 'react';

export async function loader() {
  return { vans: getVansData() };
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dataPromise = useLoaderData(); // use the data coming from getVansData function

  const filterType = searchParams.get('type');

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <>
      <div className='fleet-container'>
        {/* Header */}
        <section className='fleet-header-section'>
          <div>
            <span>Our Fleet</span>
            <h1 className='fleet-title'>
              Built for every road,
              <br />
              every season.
            </h1>
            <p className='fleet-desc'>
              Six meticulously converted campervans. Each with a unique
              personality, all with the same commitment to adventure.
            </p>
          </div>
        </section>
        <section className='van-grid'>
          <div className='van-list-container'>
            {/* <h1>Explore van options </h1> */}
            <Suspense fallback={<h2>Loading vans...</h2>}>
              <Await resolve={dataPromise.vans}>
                {(vans) => {
                  const filteredVans = filterType
                    ? vans.filter(
                        (van) =>
                          van.type.toLowerCase() === filterType.toLowerCase(),
                      )
                    : vans;

                  const vanElement = filteredVans.map((van) => (
                    <VanInfo
                      key={van.id}
                      van={van}
                      state={{
                        search: `?${searchParams.toString()}`,
                        type: filterType,
                      }}
                    />
                  ));

                  return (
                    <>
                      <div className='van-list-filter-buttons '>
                        <h1>Explore van options </h1>
                        <div>
                          <span>Filters: </span>
                          <button
                            onClick={() => handleFilterChange('type', 'simple')}
                            className={`van-type simple ${filterType === 'simple' ? 'selected' : ''}`}
                          >
                            Simple
                          </button>
                          <button
                            onClick={() => handleFilterChange('type', 'eco')}
                            className={`van-type eco ${filterType === 'eco' ? 'selected' : ''}`}
                          >
                            Eco
                          </button>
                          <button
                            onClick={() => handleFilterChange('type', 'rugged')}
                            className={`van-type rugged ${filterType === 'rugged' ? 'selected' : ''}`}
                          >
                            Rugged
                          </button>
                          <button
                            onClick={() => handleFilterChange('type', 'luxury')}
                            className={`van-type luxury ${filterType === 'luxury' ? 'selected' : ''}`}
                          >
                            Luxury
                          </button>
                          {filterType ? (
                            <button
                              onClick={() => handleFilterChange('type', null)}
                              className={`van-type filter`}
                            >
                              Clear{' '}
                            </button>
                          ) : null}
                        </div>
                      </div>
                      <div className='van-list'>{vanElement}</div>
                    </>
                  );
                }}
              </Await>
            </Suspense>
          </div>
        </section>
      </div>
    </>
  );
};

export default Vans;
