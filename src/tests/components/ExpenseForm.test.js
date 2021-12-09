import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  //make sure no error shows up before changing form; make sure the two snapshots match up
  expect(wrapper).toMatchSnapshot()
  //first find the form, then simulate 'submit'
  wrapper.find('form').simulate('submit', { preventDefault: () => {} })
  //handle e.preventDefault(); we are not passing anything as 'e' in test
  //make sure what shouldve happened actually did happen. "if" statement should have passed and ran code block.
  //fetch state off wrapper; use ".state([key]"
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  //make sure after error state changes, actually render.
  expect(wrapper).toMatchSnapshot()
})

//simulate change event. check description input change sets state for description value
test('should set description value on input change', () => {
  const value = 'New Description for Testing'
  //render ExpenseForm, change input, make assertion checking description state is set
  const wrapper = shallow(<ExpenseForm />)
  //access the element; use .at() using index.
  wrapper.find('input').at(0).simulate('change', {
    //make sure target.value exists
    target: { value },
  })
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
  const value = 'New Note for Testing'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('textarea').simulate('change', {
    target: { value },
  })
  expect(wrapper.state('note')).toBe(value)
})

test('should set the amt to something valid', () => {
  const value = '23.5'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  })
  expect(wrapper.state('amount')).toBe(value)
})

test('should not set amt if invalid data input', () => {
  const value = '12.122'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  })
  expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission using a mock function', () => {
  const onSubmitSpy = jest.fn()
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  )
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
  })
  // onSubmitSpy('Sam', 'Seoul')
  // expect(onSubmitSpy).toHaveBeenCalledWith('Sam', 'Seoul')
})

test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  //trigger the prop fromt he child component, SingleDatePicker using wrapper.find
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on change; onFocusChange actually sets calendar focus, either true or false', () => {
  const focused = true
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({
    focused,
  })
  expect(wrapper.state('calendarFocused')).toBe(focused)
})
