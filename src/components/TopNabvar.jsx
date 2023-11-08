import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function TopNavbar() {
  const [showNavBar, setShowNavBar] = useState(false);

  const toggleNavbar = () => {
    setShowNavBar(!showNavBar);
  };

  const hideNavbar = () => {
    setShowNavBar(false);
  };

  return (
    <div>
      <ul className='bg-black text-white'>
        <li><i className='fa fa-bars flex justify-end p-6 text-5xl' onClick={toggleNavbar}></i></li>
        <div id='menu' className={`flex flex-col justify-center text-center bg-black text-white text-[65px] md:text-[80px] h-screen ${showNavBar ? '' : 'hidden'}`}>
          <li><NavLink className={showNavBar ? '' : 'hidden'} to="/" onClick={hideNavbar}>Home</NavLink></li>
          <li><NavLink className={showNavBar ? '' : 'hidden'} to="/portfolio" onClick={hideNavbar}>Portfolio</NavLink></li>
          <li><NavLink className={showNavBar ? '' : 'hidden'} to="/about" onClick={hideNavbar}>About</NavLink></li>
          <li><NavLink className={showNavBar ? '' : 'hidden'} to="/contact" onClick={hideNavbar}>Contact</NavLink></li>
        </div>
      </ul>
    </div>
  );
}

export default TopNavbar;
