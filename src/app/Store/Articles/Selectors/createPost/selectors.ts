import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import {AppStateInterface} from '../../../../../assets/shared/types/states/appState.interface';
import {CreateArticleStateInterface} from '../../../../../assets/shared/types/states/createArticleState.interface';

export const CreatePostFeatureSelector =
  createFeatureSelector<
    AppStateInterface,
    CreateArticleStateInterface
  >('createArticle');

export const IsSubmittingSelector = createSelector(
  CreatePostFeatureSelector,
  (state: CreateArticleStateInterface) => state.isSubmitting
);

export const ErrorSelector = createSelector(
  CreatePostFeatureSelector,
  (state: CreateArticleStateInterface) =>
    state.validationErrors
);
