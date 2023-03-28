import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../Actions/register.action';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {AuthService} from '../../../services/auth.service';
import ICurrentUser from '../../../../assets/shared/types/user/currentUser.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {PersistenceService} from '../../../services/persistence.service';
import {Router} from '@angular/router';

@Injectable()
export class RegisterEffects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            this.persistance.set(
              'token',
              currentUser.token
            );
            return registerSuccessAction({currentUser});
          }),
          catchError((errResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({
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
        ofType(registerSuccessAction),
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
