import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../ActionTypes';
import {ArticleInterface} from '../../../../../assets/shared/types/article/article.interface';

export const getArticlesAction = createAction(
  ActionTypes.Get_Articles,
  props<{slug: string}>()
);

export const getArticleSuccessAction = createAction(
  ActionTypes.Get_Articles_Success,
  props<{article: ArticleInterface}>()
);

export const getArticlesFailureAction = createAction(
  ActionTypes.Get_Articles_Fail
);
