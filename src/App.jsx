import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to={'/'} className='site-logo'>
          #RENTIFY
        </Link>
        <nav>
          <Link to={'/about'}>About</Link>
          {/* <Link to={'/vans'}>
            Vans
          </Link> */}
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
