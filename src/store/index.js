import createStore from 'unistore'

const initialState = {
  asd: 'asd'
}

export let actions = store => ({
  increment(state) {
    return { count: state.count + 1 }
  },
  decrement(state) {
    return { count: state.count - 1 }
  }
})

export default (state = initialState) => createStore(state)
