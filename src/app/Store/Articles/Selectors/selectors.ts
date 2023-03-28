import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import {AppStateInterface} from '../../../../assets/shared/types/states/appState.interface';
import ArticleStateInterface from '../../../../assets/shared/types/states/articleState.interface';

export const ArticlesFeatureSelector =
  createFeatureSelector<
    AppStateInterface,
    ArticleStateInterface
  >('article');

export const ArticlesSelector = createSelector(
  ArticlesFeatureSelector,
  (state: ArticleStateInterface) => state?.data
);
export const IsLoadingSelector = createSelector(
  ArticlesFeatureSelector,
  (state: ArticleStateInterface) => state.isLoading
);
export const ErrorSelector = createSelector(
  ArticlesFeatureSelector,
  (state: ArticleStateInterface) => state.error
);
