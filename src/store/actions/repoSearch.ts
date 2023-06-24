import axios from "axios";
import { Action, Dispatch } from "redux";

import { ActionType } from "../types";

interface RepoSearch extends Action {
  type: ActionType.SEARCH_REPO;
}

interface RepoSearchSuccess extends Action {
  type: ActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}

interface RepoSearchError extends Action {
  type: ActionType.SEARCH_REPO_ERROR;
  payload: string;
}

export type RepoAction = RepoSearch | RepoSearchSuccess | RepoSearchError;

export const fetchRepo = (key: string) => {
  return async (dispatch: Dispatch<RepoAction>) => {
    dispatch({ type: ActionType.SEARCH_REPO });
    try {
      const response = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: key,
        },
      });

      const repoNames = response.data.objects.map((result: any) => {
        return result.package.name;
      });
      dispatch({ type: ActionType.SEARCH_REPO_SUCCESS, payload: repoNames });
    } catch (error) {
      error instanceof Error &&
        dispatch({
          type: ActionType.SEARCH_REPO_ERROR,
          payload: error.message,
        });
    }
  };
};
