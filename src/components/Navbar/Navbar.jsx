import React from 'react';
import PropTypes from 'prop-types';
import Logo from './github.png';
import './Navbar.scss';
const Navbar = ({ title }) => {
  return (
    <nav className='navbar'>
      <img src={Logo} alt='Logo' />
      <h1>{title}</h1>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'Github Finder',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;