import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';
import Dashboard from './pages/Host/Dashboard';
import HostVans from './pages/Host/HostVans';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Hostlayout from './components/Hostlayout';
import Layout from './components/Layout';

import './server';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/host' element={<Hostlayout />}>
            <Route index element={<Dashboard />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>

          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
