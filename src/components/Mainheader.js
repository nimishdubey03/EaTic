import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Mainheader.module.css';

function Mainheader() {
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <h2>EaTic</h2>
      </div>
      <div className={classes.links}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/virtues">
              Virtues
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Mainheader;

// Allerta Stencil
// Megrim
