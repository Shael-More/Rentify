import { Outlet } from 'react-router-dom';
import Hostheader from '../pages/Host/Hostheader'
const Hostlayout = () => {
  return (
    <div className="hostlayout-container">
      <Hostheader />
      <Outlet />
    </div>
  );
};

export default Hostlayout;
