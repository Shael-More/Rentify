import { useState, useEffect } from 'react';
import VanInfo from './VanInfo';

const Vans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElement = vans.map((van) => <VanInfo key={van.id} van={van} />);

  return (
    <div className='van-list-container'>
      <h1>Explore van options </h1>
      <div className='van-list'>{vanElement}</div>
    </div>
  );
};

export default Vans;
