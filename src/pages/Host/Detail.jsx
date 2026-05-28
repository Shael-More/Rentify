import { useOutletContext } from 'react-router-dom';

const Detail = () => {
  const { name, type, description } = useOutletContext();

  // By using useOutletContext no need to fetch this again
  // const {id} = useParams()
  // const [van, setVan] = useState([])
  // useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //   .then(res => res.json())
  //   .then(data => setVan(data.vans[0]))
  // }, [id])

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
