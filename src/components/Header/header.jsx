import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <div className='options'>
      <img src={Logo} className='logu' alt='website logo' />
      <Link className='option' to='/Review'>
        Our Team
      </Link>
      <Link className='option' to='/FAQ'>
        Join us
      </Link>
      <Link className='option' to='/Join'>
        We are hiring
      </Link>
      <Link className='option' to='/Team'>
        Faqs
      </Link>
      <Link className='option' to='/Team'>
        Contact  us
      </Link>
    </div>
  </div>
);

export default Header;