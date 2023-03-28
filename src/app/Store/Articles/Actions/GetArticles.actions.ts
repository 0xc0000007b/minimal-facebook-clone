import {createAction, props} from '@ngrx/store';
import {ArticleInterface} from '../../../../assets/shared/types/article/article.interface';
import {ActionTypes} from './ActionTypes';

export const getArticlesAction = createAction(
  ActionTypes.Get_Articles,
  props<{slug: string}>()
);

export const getArticlesSuccessAction = createAction(
  ActionTypes.Get_Articles_Success,
  props<{article: ArticleInterface}>()
);

export const getArticlesFailureAction = createAction(
  ActionTypes.Get_Articles_Fail
);
