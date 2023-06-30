import React from 'react';
// images
import Logo from '../assets/logo.svg';

const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/** logo */}
        <a href='#'>
          <img src={Logo} aly='JayCesar_Logo' />
        </a>
        {/* button */}
        <button className='btn btn-sm'> Trabalhe comigo </button>
      </div>
    </div>
  </header>;
};

export default Header;
