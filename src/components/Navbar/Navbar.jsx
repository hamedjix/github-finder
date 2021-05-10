import PropTypes from 'prop-types';
import Logo from './github.png';
import './Navbar.scss';
import { Link } from 'react-router-dom';
const Navbar = ({ title }) => {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <img src={Logo} alt='Logo' />
      </Link>
      <Link to='/'>
        <h1>{title}</h1>
      </Link>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'Github User Finder',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
