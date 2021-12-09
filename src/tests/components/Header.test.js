// import ReactShallowRenderer from 'react-test-renderer/shallow'
import React from 'react'
import Header from '../../components/Header'
import { shallow } from 'enzyme'
// import toJSON from 'enzyme-to-json'

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()

  //using enzyme
  // expect(wrapper.find('h1').length).toBe(1)
  // expect(wrapper.find('h1').text()).toBe('Expensify')

  //using react-test-renderer
  // const renderer = new ReactShallowRenderer()
  // renderer.render(<Header />)
  // expect(renderer.getRenderOutput()).toMatchSnapshot()
})

//snapshots allow us to test changes to data over time. compare one snapshot to see if anything changed.
//can accept/reject the changes
