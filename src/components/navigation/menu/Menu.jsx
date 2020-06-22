import React, { useEffect } from 'react';
import initialState from '../../../constants/index';
import MenuSearch from './MenuSearch';
import MenuLinks from './MenuLinks';
const linkList = initialState.initialState.NavOptions;


function Menu(props) {
	return (
    <nav className="navbar">
      <MenuSearch />
      <MenuLinks 
        linkList={linkList} 
      />
    </nav>
  )
}


export default Menu;