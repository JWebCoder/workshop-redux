import { createStore } from 'redux'
import reducer from './reducer'
import sleep from './helpers'
import colors from 'colors'

let store = createStore(reducer)

const receiveComment = comment => ({
  type: 'RECEIVE_COMMENT',
  comment
})

store.dispatch(receiveComment('Redux is great!'))
store.dispatch(receiveComment('Redux is not React!'))
store.dispatch(receiveComment('Redux is just redux!'))
console.log(store.getState())

/*
console.log('Sending comment to redux ===>>>'.green)
sleep(1000)
store.dispatch(receiveComment('Redux is great!'))
console.log('Redux store ===>>>'.yellow)
console.log(store.getState())
sleep(5000)
console.log('\n\n\nSending comment to redux ===>>>'.green)
sleep(1000)
store.dispatch(receiveComment('Redux is not React!'))
console.log('Redux store ===>>>'.yellow)
console.log(store.getState())
sleep(5000)
console.log('\n\n\nSending comment to redux ===>>>'.green)
sleep(1000)
store.dispatch(receiveComment('Redux is just redux!'))
console.log('Redux store ===>>>'.yellow)
console.log(store.getState())
sleep(5000)
console.log('\n\n\nFinal Redux store state ===>>>'.red.bold)
console.log(store.getState())
*/

export default store
