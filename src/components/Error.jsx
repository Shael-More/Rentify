import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className='error-container'>
      <div>
        <h2 className='error-message'>Error: {error.message}</h2>
        {`${error.message}` ? (
          <p>
            The server could not process your request. The data you're looking
            for is unavailable right now
          </p>
        ) : null}
        <pre className='error-code'>
          {error.status} - {error.statusText}
        </pre>
      </div>
    </div>
  );
};

export default Error;
