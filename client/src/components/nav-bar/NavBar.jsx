import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import './NavBar.scss';

function NavBar(props) {

  function changeActiveClass(icon, label) {
    
    if(icon.className.baseVal.includes('icon--active')) {
      return null;
    } else {
      const activeIcon = document.getElementsByClassName('icon--active');
      const newLabel = document.getElementById(`${label}Label`);
      
      document.getElementsByClassName(`active`)[0].className='hidden';
      newLabel.classList.remove('hidden')
      newLabel.classList.add('active');

      activeIcon[0].classList.remove('icon--active');
      icon.classList.add('icon--active')
    }
  }

  function changeView(view) {
    const iconId = view +'Icon';
    const icon = document.getElementById(iconId);
    changeActiveClass(icon, view);
    props.handleSetActiveView(view)
  }
  
  return (
    <nav className='container menuWrapper'>
      <div className='container__row'>
        <div className='container__col-lg-12'>
          <div className='container__row'>
            <FontAwesomeIcon
              className='logo' 
              icon={["fab", "first-order"]}
              size='6x' />
          </div>
          <div className='navbar'>
            <div 
              className='navbar__link'
              onClick={(e) => changeView('overview')}
              data-cy='overview'>
              <FontAwesomeIcon
                id='overviewIcon'
                className='icon icon--active'
                icon='diagnoses'
                size='lg' />
                <p 
                  id='overviewLabel'
                  className='active'>
                      Overview
                </p>
            </div>
            <div 
              className='navbar__link'
              onClick={(e) => changeView('accounts')}
              data-cy='accounts'>
              <FontAwesomeIcon
                id = 'accountsIcon'
                className='icon'
                icon='landmark'
                size='lg' />
                <p 
                  id='accountsLabel'
                  className='hidden'>
                    Accounts
                </p>
            </div>
            <div 
              className='navbar__link'
              onClick={(e) => changeView('goals')}
              data-cy='goals'>
              <FontAwesomeIcon
                id='goalsIcon'
                className='icon'
                icon='list-alt'
                size='lg' />
                <p 
                  id='goalsLabel'
                  className='hidden'>
                Goals
                </p>
            </div>
            <div 
              className='navbar__link'
              onClick={(e) => changeView('analytics')}
              data-cy='analytics'>
              <FontAwesomeIcon
                id='analyticsIcon'
                className='icon'
                icon='chart-pie'
                size='lg' />
                <p 
                  id='analyticsLabel'
                  className='hidden'>
                  Analytics
                </p>
            </div>
            <div 
              className='navbar__link'
              onClick={(e) => changeView('settings')}
              data-cy='settings'>
              <FontAwesomeIcon
                id='settingsIcon'
                className='icon'
                icon='cogs'
                size='lg' />
                <p 
                  id='settingsLabel'
                  className='hidden'>
                  Settings
                </p>
            </div>
          </div>  
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  handleSetActiveView: PropTypes.func.isRequired,
}

export default NavBar;