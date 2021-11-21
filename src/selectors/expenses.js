import moment from 'moment'

//get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const createdAtMoment = moment(expense.createdAt)
      // if not a number, dont take into account for filtering. start date being undefined should not filter
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, 'day')
        : true
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, 'day')
        : true

      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase())
      //if all 3 are true, return true from filter
      return startDateMatch && endDateMatch && textMatch
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1
      }
    })
}
