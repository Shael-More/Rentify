import { useState, useEffect } from 'react';
import VanInfo from './VanInfo';
import { useSearchParams } from 'react-router-dom';

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterType = searchParams.get('type');

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const filteredVans = filterType
    ? vans.filter((van) => van.type === filterType)
    : vans;

  const vanElement = filteredVans.map((van) => (
    <VanInfo
      key={van.id}
      van={van}
      state={{ search: `?${searchParams.toString()}`, type: filterType }}
    />
  ));

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
    <div className='van-list-container'>
      <h1>Explore van options </h1>

      <div className='van-list-filter-buttons'>
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
            onClick={() => handleFilterChange("type", null)}
            className={`van-type filter`}
          >
            Clear{' '}
          </button>
        ) : null}
      </div>
      <div className='van-list'>{vanElement}</div>
    </div>
  );
};

export default Vans;
