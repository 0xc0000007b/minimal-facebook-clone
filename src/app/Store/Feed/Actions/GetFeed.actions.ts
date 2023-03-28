import {createAction, props} from '@ngrx/store';
import {FeedActionTypes} from './FeedActionTypes';
import {IFeedResponse} from '../../../../assets/shared/types/feed/feedResponse.interface';

export const getFeedAction = createAction(
  FeedActionTypes.Get_Feed,
  props<{url: string}>()
);

export const getFeedSuccessAction = createAction(
  FeedActionTypes.Get_Feed_Success,
  props<{feed: IFeedResponse}>()
);

export const getFeedFailureAction = createAction(
  FeedActionTypes.Get_Feed_Fail
);
