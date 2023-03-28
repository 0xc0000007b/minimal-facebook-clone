import {createAction, props} from '@ngrx/store';
import {ActionTypes} from './ActionTypes';
import {IArticleInput} from '../../../../assets/shared/types/article/articleInput.interface';
import {ArticleInterface} from '../../../../assets/shared/types/article/article.interface';
import IBackendErrors from '../../../../assets/shared/types/errors/backe.dErrors.interface';
import {ArticleInputInterface} from '../../../../assets/shared/types/articleInput.interface';

export const CreateArticleAction = createAction(
  ActionTypes.Create_Articles,
  props<{articleInput: ArticleInputInterface}>()
);
export const CreateArticleSuccessAction = createAction(
  ActionTypes.Create_Articles_Success,
  props<{article: ArticleInterface}>()
);
export const CreateArticleFailureAction = createAction(
  ActionTypes.Create_Articles_Fail,
  props<{errors: IBackendErrors}>()
);
