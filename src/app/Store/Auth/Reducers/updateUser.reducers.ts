import ISettingsState from '../../../../assets/shared/types/states/settingsState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {
  updateUserFailureAction,
  updateUserStartAction,
  updateUserSuccessAction,
} from '../Actions/Update/UpdateCurrentUser.actions';

const initialState: ISettingsState = {
  isSubmitting: false,
  validationErrors: null,
};

const settingsReducer = createReducer(
  initialState,
  on(
    updateUserStartAction,
    (state): ISettingsState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateUserSuccessAction,
    (state): ISettingsState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateUserFailureAction,
    (state, action): ISettingsState => ({
      ...state,
      validationErrors: action.errors,
    })
  )
);

export function reducers(
  state: ISettingsState,
  action: Action
) {
  return settingsReducer(state, action);
}
