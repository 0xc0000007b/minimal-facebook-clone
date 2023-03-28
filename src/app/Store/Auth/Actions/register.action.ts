import {createAction, props} from '@ngrx/store';
import {ActionTypes} from './ActionTypes';
import IRegisterRequest from '../../../../assets/shared/types/auth/registerRequest.interface';
import ICurrentUser from '../../../../assets/shared/types/user/currentUser.interface';
import IBackendErrors from '../../../../assets/shared/types/errors/backe.dErrors.interface';

export const registerAction = createAction(
  ActionTypes.Register,
  props<{request: IRegisterRequest}>()
);
export const registerSuccessAction = createAction(
  ActionTypes.Register_Success,
  props<{currentUser: ICurrentUser}>()
);
export const registerFailureAction = createAction(
  ActionTypes.Register_Fail,
  props<{errors: IBackendErrors}>()
);
