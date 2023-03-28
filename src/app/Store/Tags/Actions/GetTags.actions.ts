import {createAction, props} from '@ngrx/store';
import {TagsActionTypes} from './ActionTypes';
import IPopularTags from '../../../../assets/shared/types/article/getPopularTagsResponse.interface';
import {PopularTagsType} from '../../../../assets/shared/types/article/PopularTagsType';

export const getTagsAction = createAction(
  TagsActionTypes.Get_Tags
);

export const getTagsSuccessAction = createAction(
  TagsActionTypes.Get_Tags_Success,
  props<{tags: PopularTagsType[]}>()
);

export const getTagsFailureAction = createAction(
  TagsActionTypes.Get_Tags_Fail
);
