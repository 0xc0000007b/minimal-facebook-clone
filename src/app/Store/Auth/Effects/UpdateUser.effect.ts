import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  updateUserFailureAction,
  updateUserStartAction,
  updateUserSuccessAction,
} from '../Actions/Update/UpdateCurrentUser.actions';
import {catchError, map, of, switchMap} from 'rxjs';
import {AuthService} from '../../../services/auth.service';
import ICurrentUser from '../../../../assets/shared/types/user/currentUser.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {CurrentUserInterface} from '../../../../assets/shared/types/currentUser.interface';

@Injectable()
export class UpdateUserEffect {
  constructor(
    private action: Actions,
    private authService: AuthService
  ) {}
  updateUser$ = createEffect(() =>
    this.action.pipe(
      ofType(updateUserStartAction),
      switchMap(({currentUserInput}) => {
        return this.authService
          .updateCurrentUser(currentUserInput)
          .pipe(
            map((currentUser: CurrentUserInterface) => {
              return updateUserSuccessAction({currentUser});
            }),
            catchError((errResponse: HttpErrorResponse) => {
              return of(
                updateUserFailureAction({
                  errors: errResponse.error.errors,
                })
              );
            })
          );
      })
    )
  );
}
