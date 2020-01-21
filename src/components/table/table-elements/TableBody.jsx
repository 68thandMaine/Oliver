import React from 'react';
import PropTypes from 'prop-types';

function TableBody(props) {

    return (
        <tbody>
            <tr>
                <td>The table body</td>
                <td>With two columns</td>
                <td>Three Columns</td>
                <td>Four Columns</td>
                <td>Five Columns</td>
          </tr>
        </tbody>
    );
};

TableBody.propTypes = {

};

export default TableBody;