import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import {AppStateInterface} from '../../../../assets/shared/types/states/appState.interface';
import {PopularTagsStateInterface} from '../../../../assets/shared/types/states/ITagsState';

export const popularTagsFeatureSelector =
  createFeatureSelector<
    AppStateInterface,
    PopularTagsStateInterface
  >('popularTags');

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsStateInterface) => state.data
);
export const popularTagsIsLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsStateInterface) => state.isLoading
);
export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsStateInterface) => state.error
);
