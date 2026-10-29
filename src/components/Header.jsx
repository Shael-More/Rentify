import { Link, NavLink } from 'react-router-dom';
// import UserIcon from "../assets/images/user_icon.png"
const Header = () => {
  function fakeLogout() {
    return localStorage.removeItem('isLoggedIn');
  }
  return (
    <header>
      {/* Logo */}
      <Link to='/' className='site-logo'>
        <span
          className='material-symbols-outlined'
          style={{ fontSize: 28, color: '#9d3d26' }}
        >
          rv_hookup
        </span>
        <span
          style={{
            fontWeight: 700,
            fontSize: 20,
            color: '#1c1c18',
            letterSpacing: '-0.3px',
          }}
        >
          RENTIFY
        </span>
      </Link>
      <nav className="header-nav">
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
        
        <Link className='user-icon' to={'/login'}>
          {/* <img src={UserIcon} alt='user icon' width={20} /> */}
          <span class='material-symbols-outlined'
            // style={{'font-size: 20px; color: rgb(86, 66, 61);'}}
          > person </span>
        </Link>

        <button onClick={() => fakeLogout()}>Logout</button>
      </nav>
    </header>
  );
};

export default Header;
