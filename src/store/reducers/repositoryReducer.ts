import { Reducer } from "redux";
import { RepoAction } from "../actions/repoSearch";
import { ActionType } from "../types";

interface RepoState {
  loading: boolean;
  data: string[];
  err: string | null;
}

const initialState = {
  loading: false,
  data: [],
  err: null,
};
const reducer: Reducer<RepoState, RepoAction> = (state = initialState, action) => {
  
  switch (action.type) {
    case ActionType.SEARCH_REPO:
      return { ...initialState, loading: true };
    case ActionType.SEARCH_REPO_SUCCESS:
      return { ...initialState, data: action.payload, loading: false };
    case ActionType.SEARCH_REPO_ERROR:
      return { ...initialState, err: action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;
