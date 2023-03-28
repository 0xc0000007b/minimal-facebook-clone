import {Action, createReducer, on} from '@ngrx/store';
import IArticleState from '../../../../assets/shared/types/states/articleState.interface';
import {
  getArticlesAction,
  getArticlesFailureAction,
  getArticlesSuccessAction,
} from '../Actions/GetArticles.actions';

const initialState: IArticleState = {
  data: null,
  isLoading: false,
  error: null,
};

const ArticlesReducer = createReducer(
  initialState,
  on(
    getArticlesAction,
    (state): IArticleState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticlesSuccessAction,
    (state, action): IArticleState => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticlesFailureAction,
    (state): IArticleState => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(
  state: IArticleState,
  action: Action
) {
  return ArticlesReducer(state, action);
}
