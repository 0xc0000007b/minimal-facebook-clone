import IFeedState from '../../../../assets/shared/types/states/feedState.inteface';
import {Action, createReducer, on} from '@ngrx/store';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from '../Actions/GetFeed.actions';
import {routerNavigatedAction} from '@ngrx/router-store';

const initialState: IFeedState = {
  data: null,
  error: null,
  isLoading: false,
};

const FeedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): IFeedState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): IFeedState => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): IFeedState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigatedAction, (): IFeedState => initialState)
);

export function reducers(
  state: IFeedState,
  action: Action
) {
  return FeedReducer(state, action);
}
