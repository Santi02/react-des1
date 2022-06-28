import CartWidget from './CartWidget';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

export const Navbar = () => {
  return (
        <div className= "container">
          <nav className="nav">
            <div className="brand1">
              <NavLink className="nav__link1" to='/Home'>Sofitel</NavLink>
            </div>
            <p className="nav__list">
              <a>
                <NavLink className="nav__link" to='Reservas'>Reservas</NavLink>
              </a>
              <a>
                <NavLink className="nav__link" to='Cart'>
                  <CartWidget />
                </NavLink>
              </a>
            </p>
          </nav>
        </div>
  );
}

export default Navbar;
<a></a>