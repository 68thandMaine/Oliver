import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavSearch() {

      return (
  <div className="navbar__input-search">
    <span className='u-pt3 u-pb3'>
      <FontAwesomeIcon className='icon--white u-mt4' icon='search'/>
    </span>
    <input className="input input__search u-pl3 text-lg" autoFocus placeholder="What can I do for you?"/>
  </div>
  )
}

export default NavSearch;