import {createAction, props} from '@ngrx/store';
import {ActionTypes} from './Actions/ActionTypes';
import ICurrentUser from '../../../assets/shared/types/user/currentUser.interface';

export const getCurrentUserAction = createAction(
  ActionTypes.Get_User_Start
);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.Get_User_Success,
  props<{currentUser: ICurrentUser}>()
);

export const getCurrentUserFailureAction = createAction(
  ActionTypes.Get_User_Fail
);
