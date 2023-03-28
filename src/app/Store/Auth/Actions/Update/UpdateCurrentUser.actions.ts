import {createAction, props} from '@ngrx/store';
import {ActionTypes} from './ActionTypes';
import ICurrentUserInput from '../../../../../assets/shared/types/user/currentUserInput.interface';
import ICurrentUser from '../../../../../assets/shared/types/user/currentUser.interface';
import IBackendErrors from '../../../../../assets/shared/types/errors/backe.dErrors.interface';
import {CurrentUserInterface} from '../../../../../assets/shared/types/currentUser.interface';
import {CurrentUserInputInterface} from '../../../../../assets/shared/types/currentUserInput.interface';

export const updateUserStartAction = createAction(
  ActionTypes.Update_User,
  props<{currentUserInput: CurrentUserInputInterface}>()
);
export const updateUserSuccessAction = createAction(
  ActionTypes.Update_User_Success,
  props<{currentUser: CurrentUserInterface}>()
);
export const updateUserFailureAction = createAction(
  ActionTypes.Update_User_Fail,
  props<{errors: IBackendErrors}>()
);
