import {createAction, props} from '@ngrx/store';

import {ActionTypes} from '../../Articles/Actions/ActionTypes';

export const deleteArticleAction = createAction(
  ActionTypes.Delete_Articles,
  props<{slug: string}>()
);

export const deleteArticleSuccessAction = createAction(
  ActionTypes.Delete_Articles_Success
);

export const deleteArticleFailureAction = createAction(
  ActionTypes.Delete_Articles_Fail
);
