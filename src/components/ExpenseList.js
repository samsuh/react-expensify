import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
  <div>
    <h1>ExpenseList Component</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem {...expense} key={expense.id} />
    })}
  </div>
)

//we dont get back the HOC. we get back the function.call with the component passed in. fx()(Component)
// const ConnectedExpenseList = connect()(ExpenseList)
//decide what we need from the store inside the connect(here)(Component)
// const ConnectedExpenseList = connect((state) => {
//   return {
//     expenses: state.expenses
//   }
// })(ExpenseList)

// export default ConnectedExpenseList

//dont create separate ConnectedExpenseList const. export default the actual connect()()
//separate out the dinner function in connect(thisfx)(Component) as mapStateToProps

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  }
}

//call connect, define the things we want to get off the (mapStateToProps), and define the component we wnat to conncet to the store(ExpenseList).
//results in a brand new component with our component with props from the store (ConnectedExpenseList).
export default connect(mapStateToProps)(ExpenseList)
