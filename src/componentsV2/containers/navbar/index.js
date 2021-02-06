import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.scss';
import { useLogOff } from '../../../hooks';
import logo from './a-mon-ami.png';

const Navbar = () => {
  // manage sidenav width
  const [sidenavWidth, setSidenavWidth] = useState();
  const showSidebar = () => {
    setSidenavWidth({ width: '250px' });
  };
  const hideSidebar = () => {
    setSidenavWidth({ width: '0px' });
  };

  // for display username on navbar
  const username = useSelector(state => state.userInfo.username);

  // tracking if we are in post section to display btn to show post form
  // when the component appears, it dispatch this bool on redux store
  const postSectionStatus = useSelector(
    state => state.posts.postSectionVisible
  );

  // log off hook
  const { logOff } = useLogOff();

  return (
    <div id="navbar">
      <Link to="/">
        <img src={logo} width="100px" alt="A mon ami" />
        </Link>
      <span className="hamburguer-btn" onClick={showSidebar}>
        &#9776;
      </span>

      <Link to="/my-profile">
        <span className="username-mobile">Account</span>
      </Link>

      <div style={sidenavWidth} className="sidenav" onClick={hideSidebar}>
        <a className="close-btn" onClick={hideSidebar}>
          &times;
        </a>

        {username === 'not logged' || username === '' ? (
          <>
            <Link to="/registration">Register</Link>
            <Link to="/login">Log in</Link>
          </>
        ) : (
          <>
            <a className="log-off-btn" onClick={logOff}>
              Log off
            </a>

            <Link to="/my-profile">
              <span className="username-desktop">Account</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
