import { Link } from 'react-router-dom';

const VanInfo = ({ van, state }) => {
  return (
    <div className='van-title van-card'>
      <Link to={van.id} state={state}>
        <div className='van-title-img-container'>
          <img src={van.imageUrl} alt={van.name} />
          {/* <div className='van-type-badge'>{van.badge}</div> */}
          <div className='van-type-category'>{van.type}</div>
        </div>
        <div className='van-detail'>
          <h3 className='van-name'>{van.name}</h3>
          <p className='van-desc'>
            {van.desc}
          </p>
        </div>

        {/* Specs pills */}
        <div className='specs-pills'>
          {[
            { icon: 'bed', text: `Sleeps ${van.specs.sleeps}` },
            { icon: 'directions_car', text: van.specs.drive },
            { icon: 'solar_power', text: van.specs.feature },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="specs-tile"
            >
              <span
                className='material-symbols-outlined'
                style={{ fontSize: 13 }}
              >
                {icon}
              </span>
              {text}
            </div>
          ))} 
        </div>

        {/* Price & CTA */}
        <div className='cta'>
          <div>
            <span className='cta_price'>${van.price} /night</span>
          </div>
          <button 
          className="cta_book"
          >
            Book Now
            <span
              className='material-symbols-outlined'
              style={{ fontSize: 16 }}
            >
              arrow_forward
            </span>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default VanInfo;
