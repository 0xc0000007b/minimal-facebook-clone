import IEditArticleState from '../../../../../assets/shared/types/states/editArticle.state';
import {Action, createReducer, on} from '@ngrx/store';
import {
  updateArticlesAction,
  updateArticlesFailureAction,
  updateArticlesSuccessAction,
} from '../../Actions/Update/UpdateArticle.actions';
import {
  getArticlesAction,
  getArticlesFailureAction,
} from '../../Actions/Update/GetArticlec.actions]';
import {getArticlesSuccessAction} from '../../Actions/GetArticles.actions';

const initialState: IEditArticleState = {
  isLoading: false,
  isSubmitting: true,
  validationErrors: null,
  article: null,
};
const updateArticleReducers = createReducer(
  initialState,
  on(
    updateArticlesAction,
    (state): IEditArticleState => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    })
  ),
  on(
    updateArticlesSuccessAction,
    (state): IEditArticleState => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    })
  ),
  on(
    updateArticlesFailureAction,
    (state): IEditArticleState => ({
      ...state,
      isLoading: true,
      isSubmitting: false,
      validationErrors: state.validationErrors,
    })
  ),
  on(
    getArticlesAction,
    (state): IEditArticleState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(getArticlesSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    article: action.article,
    isSubmitting: true,
  })),
  on(getArticlesFailureAction, (state) => ({
    ...state,
    validationErrors: state.validationErrors,
  }))
);

export function reducers(
  state: IEditArticleState,
  action: Action
) {
  return updateArticleReducers(state, action);
}
