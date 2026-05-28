import { Outlet } from 'react-router-dom';
import Hostheader from '../pages/Host/Hostheader'
const Hostlayout = () => {
  return (
    <>
      <Hostheader />
      <Outlet />
    </>
  );
};

export default Hostlayout;
