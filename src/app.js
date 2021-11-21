import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import './styles/styles.scss'
import 'normalize.css/normalize.css'

const store = configureStore()

//add expense 'water bill'
const waterBill = store.dispatch(
  addExpense({
    description: 'water bill',
    amount: '1000',
    createdAt: 100,
  })
)

//add expense 'gas bill'
const gasBill = store.dispatch(
  addExpense({
    description: 'gas bill',
    amount: '2000',
    createdAt: 200,
  })
)

//add expense 'not a bill'
const foodExpense = store.dispatch(
  addExpense({
    description: 'food',
    amount: '3000',
    createdAt: 300,
  })
)

//add expense 'rent'
const rentExpense = store.dispatch(
  addExpense({
    description: 'rent',
    amount: '4000',
    createdAt: 101,
  })
)

//basic hardcoded setTextFilter 'bill'
// store.dispatch(setTextFilter('bill'))

//getVisibleExpenses
const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

// console.log(store.getState())

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
