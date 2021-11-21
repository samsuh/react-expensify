import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount,
} from '../../actions/filters'
import moment from 'moment'
import { exportAllDeclaration } from '@babel/types'

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  })
})

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  })
})

test('should set text filter action obkect', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  })
})

test('should set text filter action object', () => {
  const text = 'some text'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: text,
  })
})

test('should generate sort by date action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
  // const action = sortByDate()
  // expect(action).toEqual({
  //   type: 'SORT_BY_DATE',
  // })
})

test('should generate sort by amount action object', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  })
})
