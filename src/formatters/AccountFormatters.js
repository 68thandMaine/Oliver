function formatMoney(amount) {
    // let stringAmount = amount.toString();
    // console.log(typeof stringAmount)
    // (amount.includes('.')) ? console.log('true') : console.log('false');
    return `$${amount}`;
};

export {
    formatMoney,
}