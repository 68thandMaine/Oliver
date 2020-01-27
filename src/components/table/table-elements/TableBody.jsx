import React from 'react';
import PropTypes from 'prop-types';

function TableBody(props) {
const { body } = props;
function buildTableRows() {
    console.log()
    // console.log(Object.keys(body))
    
}

    return (
        <tbody>
            {buildTableRows()}
            {/* <tr>
                <td>The table body</td>
                <td>With two columns</td>
                <td>Three Columns</td>
                <td>Four Columns</td>
                <td>Five Columns</td>
          </tr> */}
        </tbody>
    );
};

TableBody.propTypes = {
    // body: PropTypes.array,
    
};

export default TableBody;
