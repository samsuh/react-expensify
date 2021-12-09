import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state to empty array', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '-1' }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add expense', () => {
  const itemToAdd = {
    id: '999',
    description: 'Added for testing',
    note: '',
    amount: 9990,
    createdAt: 20000,
  }
  const action = { type: 'ADD_EXPENSE', expense: itemToAdd }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, itemToAdd])
})

//should edit an expense
test('should edit an expense', () => {
  const amount = 122000
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount,
    },
  }
  const state = expensesReducer(expenses, action)
  expect(state[1].amount).toEqual(amount)
})

//should not edit expense if expense id not found
test('should not edit an expense if expense.id is not found', () => {
  const amount = 122000
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount,
    },
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})
