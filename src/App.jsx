import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';
import Dashboard from './pages/Host/Dashboard';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './pages/Host/HostVanDetail';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Hostlayout from './components/Hostlayout';
import Layout from './components/Layout';

import './server';
import Detail from './pages/Host/Detail';
import Price from './pages/Host/Price';
import Photos from './pages/Host/Photos';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />

          <Route path='/host' element={<Hostlayout />}>
            <Route index element={<Dashboard />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetail />}>
              <Route index element={<Detail />} />
              <Route path='price' element={<Price />} />
              <Route path='photos' element={<Photos />} />
            </Route>
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
