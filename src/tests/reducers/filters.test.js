import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount',
  }
  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducer(currentState, action)
  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const textFilterText = 'rent'
  // const currentState = {
  //   text: textFilterText,
  //   startDate: undefined,
  //   endDate: undefined,
  //   sortBy: 'date',
  // } //not necessary at all
  const action = { type: 'SET_TEXT_FILTER', text: textFilterText }
  const state = filtersReducer(undefined, action)
  expect(state.text).toBe(textFilterText)
})

test('should set startDate filter', () => {
  const testStartDate = moment()
  const action = {
    type: 'SET_START_DATE',
    startDate: testStartDate,
  }
  const state = filtersReducer(undefined, action)
  expect(state.startDate).toBe(testStartDate)
})

test('should set endDate filter', () => {
  const testEndDate = moment()
  const action = {
    type: 'SET_END_DATE',
    endDate: testEndDate,
  }
  const state = filtersReducer(undefined, action)
  expect(state.endDate).toBe(testEndDate)
})
