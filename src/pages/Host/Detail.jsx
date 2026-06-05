import { useOutletContext } from 'react-router-dom';

const Detail = () => {
  const { name, type, description } = useOutletContext();

  return (
    <div>
      <p>
        <span className='highlight-text'>Name: </span>
        {name}
      </p>
      <p>
        <span className='highlight-text'>Category: </span>
        {type}
      </p>
      <p>
        <span className='highlight-text'>Description: </span>
        {description}
      </p>

      <p>
        <span className='highlight-text'>Visibility: </span> Public
      </p>
    </div>
  );
};

export default Detail;
