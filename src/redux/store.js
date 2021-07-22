import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers/index";

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const thunkMiddleware = require("redux-thunk").default;
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
