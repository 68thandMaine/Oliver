import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavSearch() {

      return (
  <ul className="navbar__input-search">
    <span className='u-pt3 u-pb3'>
      <FontAwesomeIcon className='icon--white u-mt3' icon='search'/>
    </span>
    <input className="input input__search u-pl3 text-lg" autoFocus placeholder="What can I do for you?"/>
  </ul>
  )
}

export default NavSearch;