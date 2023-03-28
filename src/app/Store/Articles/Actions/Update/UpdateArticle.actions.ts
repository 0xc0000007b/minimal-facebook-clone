import {createAction, props} from '@ngrx/store';
import {ActionTypes} from './ActionTypes';
import {ArticleInterface} from '../../../../../assets/shared/types/article/article.interface';
import {ArticleInputInterface} from '../../../../../assets/shared/types/articleInput.interface';

export const updateArticlesAction = createAction(
  ActionTypes.Update_Articles,
  props<{
    slug: string;
    articleInput: ArticleInputInterface;
  }>()
);

export const updateArticlesSuccessAction = createAction(
  ActionTypes.Get_Articles_Success,
  props<{article: ArticleInterface}>()
);

export const updateArticlesFailureAction = createAction(
  ActionTypes.Get_Articles_Fail,
  props<{errors}>()
);
