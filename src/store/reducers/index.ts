import { combineReducers } from "redux";
import repositoryReducer from "./repositoryReducer";


export const reducer = combineReducers({
    repository: repositoryReducer
})