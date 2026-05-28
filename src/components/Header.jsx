import { Link, NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <Link to={'/'} className='site-logo'>
        #RENTIFY
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          to={'/host'}
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          to={'/about'}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          to={'/vans'}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
