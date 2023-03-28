import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import {AppStateInterface} from '../../../../../assets/shared/types/states/appState.interface';
import EditArticleStateInterface from '../../../../../assets/shared/types/states/editArticle.state';

export const editArticleSelectorForFeature =
  createFeatureSelector<
    AppStateInterface,
    EditArticleStateInterface
  >('editArticle');

export const IsSubmittingSelector = createSelector(
  editArticleSelectorForFeature,
  (state: EditArticleStateInterface) => state.isSubmitting
);
export const IsLoadingSelector = createSelector(
  editArticleSelectorForFeature,
  (state: EditArticleStateInterface) => state.isLoading
);

export const ErrorSelector = createSelector(
  editArticleSelectorForFeature,
  (state: EditArticleStateInterface) =>
    state.validationErrors
);
export const ArticleSelector = createSelector(
  editArticleSelectorForFeature,
  (state: EditArticleStateInterface) => state.article
);
