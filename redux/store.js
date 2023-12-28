import { createStore } from "redux";

import counterReducer from "./reducer/counterReducer.js";

const store= createStore(counterReducer)

export default store




// store => counterReducer(2, {type:  "INCREASE", value :100}) => 102