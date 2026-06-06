import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans, { loader as VansLoader } from './pages/Vans';
import VanDetail, { loader as VansDetailLoader } from './pages/VanDetail';
import Dashboard from './pages/Host/Dashboard';

import HostVans, {
  loader as hostVansLoader,
} from './pages/Host/DisplayHostVans';
import HostVanDetail, {
  loader as hostVansDetailLoader,
} from './pages/Host/HostVanDetail';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Hostlayout from './components/Hostlayout';
import Layout from './components/Layout';

import './server';
import Detail from './pages/Host/Detail';
import Price from './pages/Host/Price';
import Photos from './pages/Host/Photos';
import NotFound from './pages/NotFound';
import Error from './components/Error';
import Login, {
  loader as loginLoader,
  action as loginAction,
} from './components/Login';
import { authenticationProcess } from './utils';
localStorage.removeItem('isLoggedIn');

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route
        path='vans'
        element={<Vans />}
        loader={VansLoader}
        errorElement={<Error />}
      />
      <Route
        path='vans/:id'
        element={<VanDetail />}
        loader={VansDetailLoader}
        errorElement={<Error />}
      />
      <Route
        path='login'
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      {/* ********************* Protected Routes *********************** */}
      <Route path='/host' element={<Hostlayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => {
            return await authenticationProcess(request);
          }}
        />
        <Route
          path='vans'
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route
          path='vans/:id'
          element={<HostVanDetail />}
          loader={hostVansDetailLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<Detail />}
            loader={async ({ request }) => {
              return await authenticationProcess(request);
            }}
          />
          <Route
            path='price'
            element={<Price />}
            loader={async ({ request }) => {
              return await authenticationProcess(request);
            }}
          />
          <Route
            path='photos'
            element={<Photos />}
            loader={async ({ request }) => {
              return await authenticationProcess(request);
            }}
          />
        </Route>
        <Route
          path='income'
          element={<Income />}
          loader={async ({ request }) => {
            return await authenticationProcess(request);
          }}
        />
        <Route
          path='reviews'
          element={<Reviews />}
          loader={async ({ request }) => {
            return await authenticationProcess(request);
          }}
        />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
