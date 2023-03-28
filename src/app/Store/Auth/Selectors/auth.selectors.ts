import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import {AppStateInterface} from '../../../../assets/shared/types/states/appState.interface';
import AuthStateInterface from '../../../../assets/shared/types/states/authState.interface';

export const AuthFeatureSelectors = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>('auth');
export const IsSubmittingSelector = createSelector(
  AuthFeatureSelectors,
  (authState: AuthStateInterface) => authState.isSubmitting
);
export const ValidationErrorsSelector = createSelector(
  AuthFeatureSelectors,
  (authState: AuthStateInterface) =>
    authState.validationErrors
);
export const isLoggedInSelector = createSelector(
  AuthFeatureSelectors,
  (authState: AuthStateInterface) => authState.isLoggedIn
);

export const isAnonymousSelector = createSelector(
  AuthFeatureSelectors,
  (authState: AuthStateInterface) =>
    authState.isLoggedIn === false
);

export const currentUserSelector = createSelector(
  AuthFeatureSelectors,
  (authState: AuthStateInterface) => authState.currentUser
);
