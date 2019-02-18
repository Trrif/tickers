import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import tickers from "./reducers";

const store = createStore(tickers, applyMiddleware(thunk));

export default store;
