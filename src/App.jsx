import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';


import './server';


const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to={'/'} className='site-logo'>
          #RENTIFY
        </Link>
        <nav>
          <Link to={'/about'}>About</Link>
          <Link to={'/vans'}>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
