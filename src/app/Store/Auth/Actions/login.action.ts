import {createAction, props} from '@ngrx/store';
import {ActionTypes} from './ActionTypes';
import ILoginRequest from '../../../../assets/shared/types/auth/loginRequest.interface';
import ICurrentUser from '../../../../assets/shared/types/user/currentUser.interface';
import IBackendErrors from '../../../../assets/shared/types/errors/backe.dErrors.interface';

export const loginStart = createAction(
  ActionTypes.Login,
  props<{request: ILoginRequest}>()
);
export const loginSuccess = createAction(
  ActionTypes.Login_Success,
  props<{currentUser: ICurrentUser}>()
);
export const loginFailure = createAction(
  ActionTypes.Login_Fail,
  props<{errors: IBackendErrors}>()
);
