import {PopularTagsStateInterface} from '../../../../assets/shared/types/states/ITagsState';
import {Action, createReducer, on} from '@ngrx/store';
import IFeedState from '../../../../assets/shared/types/states/feedState.inteface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from '../../Feed/Actions/GetFeed.actions';
import {routerNavigatedAction} from '@ngrx/router-store';
import {
  getTagsAction,
  getTagsSuccessAction,
} from '../Actions/GetTags.actions';

const initialState: PopularTagsStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const TagsReducer = createReducer(
  initialState,
  on(
    getTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getTagsSuccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.tags,
    })
  ),
  on(
    getFeedFailureAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    routerNavigatedAction,
    (): PopularTagsStateInterface => initialState
  )
);

export function reducers(
  state: PopularTagsStateInterface,
  action: Action
) {
  return TagsReducer(state, action);
}
