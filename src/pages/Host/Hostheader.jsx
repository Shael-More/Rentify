import { NavLink } from 'react-router-dom';
const Hostheader = () => {
  const activeStyles = {
    fontWeight: '700',
    textDecoration: 'underline',
    color: '#161616',
  };
  return (
    <>
      <nav className='nav-host'>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to='/host'
          end
        >
          Dashboard
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to='vans'
        >
          Vans
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to='income'
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to='reviews'
        >
          Review
        </NavLink>
      </nav>
    </>
  );
};

export default Hostheader;
