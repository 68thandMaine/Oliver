import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TableHeader from './table-elements/TableHeader';
import TableBody from './table-elements/TableBody';

function TransactionTable(props) {
  let headerValues = [];
  let bodyValues = [];
  useEffect(() => {
    headerValues.push(Object.keys(props.transactionData[0]));
    bodyValues.push(props.transactionData);
  });
  
  
  
  return (
      <table>
        {/* <button onClick={(e) => console.log(headerValues)}>Click this shit</button> */}
          <TableHeader 
            header = {headerValues} />
          <TableBody
            body = {bodyValues} />
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
  transactionData: PropTypes.arrayOf(PropTypes.shape(TransactionProps))
};

export default TransactionTable;