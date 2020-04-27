const formatAccountNumber = (number) => {
  const accountNumber = number.toString();
  const reformattedNumber = [];
  for(let i =0; i < accountNumber.length -4; i +=1 ) {
    reformattedNumber.push('*');
  }
  return reformattedNumber.join('') + accountNumber.substring(accountNumber.length-4);
}

const formatDollars = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

export {
    formatDollars,
    formatAccountNumber
}