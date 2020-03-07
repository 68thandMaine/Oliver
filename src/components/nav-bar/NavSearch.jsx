import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavSearch() {

      return (
  <div className="navbar__input-search">
    <span className='py-8'>
      <FontAwesomeIcon className='icon--white' icon='search'/>
    </span>
    <input className="input input__search u-pl2 text-2xl" autoFocus placeholder="What can I do for you?"/>
  </div>
  )
}

export default NavSearch;