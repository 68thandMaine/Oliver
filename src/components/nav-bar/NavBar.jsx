import React, { useEffect } from 'react';
import initialState from '../../constants/index';
import NavSearch from './NavSearch';
import NavLinks from './NavLinks';
const linkList = initialState.initialState.NavOptions;
const activeClass = 'navbar__link--active';

function NavBar(props) {

  const defaultConfig = {
    activeLinkName: 'Home',
    searchString: '',
  };
  
  useEffect(() => {
    // When the page loads we set the active link by 
    // matching the route to the linkId
    setActiveLink(defaultConfig.activeLinkName);
  });

  function setActiveLink(linkName) {
    removeActiveLink();
    document.getElementById(linkName).classList.add('navbar__link--active')
  }

  function removeActiveLink() {
    const activeLink = document.querySelector(`.${activeClass}`);
    if(activeLink) activeLink.classList.remove(activeClass);
  }


  return (
    <nav className="navbar">
      <NavSearch />
      <NavLinks 
        linkList={linkList} 
        assignActiveClass={setActiveLink}
      />
    </nav>
  )
}


export default NavBar;