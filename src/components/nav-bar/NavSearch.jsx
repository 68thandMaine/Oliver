import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavSearch() {

  return (
    <ul className="navbar__input-search fa-ul u-mt2 u-mb2">
      <li>
        <span className='fa-li u-pt1'>
          <FontAwesomeIcon className='icon--white' icon='search'/>
        </span>
        <input className="input input__search u-pl3 text-lg" autoFocus placeholder="What can I do for you?"/>
      </li>
    </ul>
  )
}

export default NavSearch;