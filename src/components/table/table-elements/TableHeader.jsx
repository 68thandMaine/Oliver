import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function TableHeader(props) {
const {
    numberOfRows,
    headerContent,
} = props;


useEffect(() => {
getHeaderInfo()
    
}, []);

function getHeaderInfo() {
    console.log('-----');
    // console.log('header type: ', typeof headerContent);
    console.log('header: ', props.headerContent);
    // console.log('header length: ', headerContent.length);
    // console.log('header[0] ', headerContent[0]);
    console.log('-----')
    console.log('');
}


    return (
        <thead>
            <tr>
                <button onClick={(e) => console.log(getHeaderInfo())} >Click </button>
            </tr>
            <tr>
                <th>Date</th>
                <th>Type of transaction</th>
                <th>Transaction Details</th>
                <th>Transaction Amount</th>
                <th>Account Amount</th>
          </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    // numberOfRows: PropTypes.number.isRequired,
    headerContent: PropTypes.array.isRequired
};

export default TableHeader;