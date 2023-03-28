import {CreateArticleStateInterface} from '../../../../../assets/shared/types/states/createArticleState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {
  CreateArticleAction,
  CreateArticleFailureAction,
  CreateArticleSuccessAction,
} from '../../Actions/CreateArticle.actions';

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const createArticleReducer = createReducer(
  initialState,
  on(
    CreateArticleAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),

  on(
    CreateArticleSuccessAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),

  on(
    CreateArticleFailureAction,
    (state, action): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(
  state: CreateArticleStateInterface,
  action: Action
) {
  return createArticleReducer(state, action);
}
