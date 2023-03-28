import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import {AppStateInterface} from '../../../../assets/shared/types/states/appState.interface';
import SettingsStateInterface from '../../../../assets/shared/types/states/settingsState.interface';

export const SettingsFeatureSelectors =
  createFeatureSelector<
    AppStateInterface,
    SettingsStateInterface
  >('settings');
export const IsSubmittingSelector = createSelector(
  SettingsFeatureSelectors,
  (authState: SettingsStateInterface) =>
    authState.isSubmitting
);
export const ValidationErrorsSelector = createSelector(
  SettingsFeatureSelectors,
  (authState: SettingsStateInterface) =>
    authState.validationErrors
);
