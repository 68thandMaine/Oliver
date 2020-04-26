const shortDate = (date) => {
   return new Intl.DateTimeFormat('en-US', {month:'short'}).format(new Date(date))
}

export default { shortDate }