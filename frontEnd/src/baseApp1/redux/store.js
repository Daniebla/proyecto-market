import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "./reducers/rootReducers";


// Para desarrollo
const store = createStore(rootReducers,composeWithDevTools(
    applyMiddleware(thunk)
))
// Para produccion
/* const store = createStore(rootReducers,applyMiddleware(thunk)) */


export default store