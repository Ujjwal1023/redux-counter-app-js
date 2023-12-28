import store from './redux/store.js'
import {increase,decrease,reset} from './redux/actions/counterActions.js'


console.log(store.getState())

store.dispatch(increase())


console.log(store.getState())
