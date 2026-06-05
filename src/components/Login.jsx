import Logo from '../assets/images/rentify_logo.jpg';
import {
  Link,
  useLoaderData,
  Form,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import { redirect } from 'react-router';
import { loginUser } from '../api';

export function loader({ request }) {
  return new URL(request.url).searchParams.get('message');
}


export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem('isLoggedIn', 'true');
  } catch (err) {
    return err.message || 'Login failed. Please try again.';
  }

  const response = redirect('/host');
  response.body = true;
  throw response;
}

const Login = () => {
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();

  return (
    <>
      {message && <h2 className='login-message'>{message}</h2>}
      {errorMessage && <h2 className='login-message'>{errorMessage}</h2>}

      <div className='login-page-container'>
        <div className='login-page'>
          <div className='logo-wrap'>
            <img src={Logo} alt='logo' className='login-logo' width={100} />
          </div>
          <h1 className='heading'>Welcome back</h1>
          <p className='sub-heading'>Sign in to continue to your account</p>

          <Form method='post' replace>
            <div className='field'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' placeholder='Email address' />
            </div>
            <div className='field'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' placeholder='Password' />
              <Link to='' className='forgot'>
                Forgot password?
              </Link>
            </div>

            <button
              className='login-btn'
              disabled={navigation.state === 'submitting'}
            >
              {navigation.state === 'submitting' ? 'Logging...' : 'Log In'}
            </button>

            <p className='signup'>
              Don't have an account? <Link to=''>Create one</Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
