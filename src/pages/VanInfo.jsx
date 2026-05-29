import { Link } from 'react-router-dom';


const VanInfo = ({ van, state }) => {
  return (
    <div className='van-title'>
      <Link to={van.id} state={state}>
        <img src={van.imageUrl} alt={van.name} />
        <div className='van-detail'>
          <h3>{van.name}</h3>
          <p>
            ${van.price} <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  );
};

export default VanInfo;
