import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

const store = legacy_createStore(reducer,applyMiddleware(thunk));

export default store;

export type RootState = ReturnType<typeof reducer>