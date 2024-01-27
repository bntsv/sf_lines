import { useSelector } from 'react-redux';
import './navbar.component.css';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const {selectedLine} = useSelector((store) => store.lines);
  const pathname = useLocation();
  const line = selectedLine?.line

  return (
    <nav>
        <NavLink to="/" >All lines</NavLink>
        {selectedLine && <NavLink to={line} selected={pathname === `/${line}`}>{line}</NavLink>}
    </nav>
  );
}

export default Navbar;