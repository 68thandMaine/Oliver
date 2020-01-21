import React from 'react';
import PropTypes from 'prop-types';

function TableHeader(props) {
const {
    numberOfRows,
    header,
} = props;

    return (
        <thead>
            <tr>
                
                    <button onClick={(e) => console.log(header[0].length)}>Header Values</button>               
                
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
    numberOfRows: PropTypes.number.isRequired,
};

export default TableHeader;