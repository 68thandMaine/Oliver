import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TableHeader from './table-elements/TableHeader';
import TableBody from './table-elements/TableBody';

function TransactionTable(props) {
  const [ tableProperties, setTableProperties ] = useState({
    transactions : props.transactionData.transactions,
  });
  useEffect(() => {
    const headerValues = [ ...new Set(Object.keys(props.transactionData.transactions[0]))]
    setTableProperties( Object.assign(tableProperties, {headerContent: headerValues}));
    console.log(tableProperties)
  });
  
  
  return (
      <table>
        {/* <button onClick={() => Object.entries(headerValues)}>Click this shit</button> */}
          <TableHeader 
            headerContent = {tableProperties} />
          <TableBody
            body = {tableProperties.transactions} />
      </table>
  )  
};

const TransactionProps = {
  Id: PropTypes.number.isRequired,
  Date: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Category: PropTypes.string.isRequired,
  Amount: PropTypes.number.isRequired,
  PaymentType: PropTypes.string.isRequired,
  PaymentTypeId: PropTypes.number.isRequired,
}

TransactionTable.propTypes = {
  // transactionData: PropTypes.arrayOf(PropTypes.shape(TransactionProps)).isRequired
};

export default TransactionTable;