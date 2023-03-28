import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import {AppStateInterface} from '../../../../assets/shared/types/states/appState.interface';
import FeedStateInterface from '../../../../assets/shared/types/states/feedState.inteface';

export const FeedFeatureSelectors = createFeatureSelector<
  AppStateInterface,
  FeedStateInterface
>('feed');
export const IsLoadingSelector = createSelector(
  FeedFeatureSelectors,
  (feed: FeedStateInterface) => feed.isLoading
);
export const IsErrorSelector = createSelector(
  FeedFeatureSelectors,
  (feed: FeedStateInterface) => feed.error
);
export const FeedSelector = createSelector(
  FeedFeatureSelectors,
  (feed: FeedStateInterface) => feed.data
);
