import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {AuthService} from '../../../services/auth.service';
import ICurrentUser from '../../../../assets/shared/types/user/currentUser.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {PersistenceService} from '../../../services/persistence.service';
import {Router} from '@angular/router';
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from '../Actions/login.action';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginStart),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map((currentUser: ICurrentUser) => {
            this.persistance.set(
              'token',
              currentUser.token
            );
            return loginSuccess({currentUser});
          }),
          catchError((errResponse: HttpErrorResponse) => {
            return of(
              loginFailure({
                errors: errResponse.error.errors,
              })
            );
          })
        );
      })
    )
  );

  redirectEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => this.router.navigateByUrl('/'))
      ),
    {dispatch: false}
  );
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistance: PersistenceService,
    private router: Router
  ) {}
}
