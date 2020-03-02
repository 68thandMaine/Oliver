import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavSearch() {

      return (
  <div className="navbar__input-search">
    <FontAwesomeIcon className='icon--white u-pb4 u-pt2 u-rt3' icon='search'/>
    <input className="input input__search" autoFocus placeholder="What can I do for you?"/>
  </div>
  )
}

export default NavSearch;