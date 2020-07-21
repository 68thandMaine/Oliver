import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function MenuSearch() {

  return (
    <section className='navbar__input-search'>
				<FontAwesomeIcon className='icon icon--white mt-1' icon='search'/>
        <input className="input input__search u-pl3 text-lg" autoFocus placeholder="What can I do for you?"/>
		</section>
  )
}

export default MenuSearch;