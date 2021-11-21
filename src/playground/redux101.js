import { createStore } from 'redux'

const incrementCount = ({ incBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incBy,
})

const decrementCount = ({ decBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decBy,
})

const resetCount = () => ({
  type: 'RESET',
})

const setCount = ({ initCount = 50 } = {}) => ({
  type: 'SET',
  initCount,
})

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // const incBy = typeof action.incBy === 'number' ? action.incBy : 1
      return {
        count: state.count + action.incBy,
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decBy,
      }
    case 'SET':
      return {
        count: action.initCount,
      }
    case 'RESET':
      return {
        count: 0,
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// store.dispatch({
//   type: 'INCREMENT',
//   incBy: 5,
// })
store.dispatch(incrementCount({ incBy: 5 }))
store.dispatch(incrementCount())
store.dispatch(resetCount())
store.dispatch(decrementCount(10))
store.dispatch(decrementCount())
store.dispatch({
  type: 'DECREMENT',
  decBy: 333,
})
store.dispatch(setCount({ initCount: 65 }))
