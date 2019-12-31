import React from 'react';
import PropTypes from 'prop-types';


function MenuBar(props) {

  return (
    <div>
      <h1>Menu Bar With Icon</h1>
      <ul>
        <li>Overview</li>
        <li>Accounts</li>
        <li>Goals</li>
        <li>Cash Graphs</li>
        <li>Settings</li>
      </ul>
    </div>
  )
}

MenuBar.propTypes = {

}

export default MenuBar();