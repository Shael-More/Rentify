import { useState } from 'react';
import Logo from '../assets/images/rentify_logo.jpg';
import { Link, useLoaderData } from 'react-router-dom';
import { loginUser } from '../api';

export function loader({ request }) {
  return new URL(request.url).searchParams.get('message');
}

const Login = () => {
  // const navigate = useNavigate()
  const [loginFormInfo, setLoginFormInfo] = useState({
    email: '',
    password: '',
  });
  // const [status, setStatus] = useState("idle")
  const message = useLoaderData();

  function handleSubmit(e) {
    e.preventDefault();
    // localStorage.setItem("isLoggedIn", "false")
    // navigate('/host')

     loginUser(loginFormInfo).then((data) => console.log(data));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      {message && <h2 className='login-message'>{message}</h2>}
      <div className='login-page-container'>
        <div className='login-page'>
          <div className='logo-wrap'>
            <img src={Logo} alt='logo' className='login-logo' width={100} />
          </div>
          <h1 className='heading'>Welcome back</h1>
          <p className='sub-heading'>Sign in to continue to your account</p>

          <form onSubmit={handleSubmit}>
            <div className='field'>
              <label htmlFor='email'>Email</label>
              <input
                onChange={handleChange}
                type='email'
                name='email'
                placeholder='Email address'
                value={loginFormInfo.email}
                required
              />
            </div>
            <div className='field'>
              <label htmlFor='password'>Password</label>
              <input
                onChange={handleChange}
                type='password'
                name='password'
                placeholder='Password'
                value={loginFormInfo.password}
                required
              />
              <Link to='' className='forgot'>
                Forgot password?
              </Link>
            </div>

            <button className='login-btn'>Log In</button>

            <p class='signup'>
              Don't have an account? <Link to=''>Create one</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
