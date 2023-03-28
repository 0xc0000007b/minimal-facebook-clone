import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {map, catchError, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {PersistenceService} from '../../services/persistence.service';
import {tsCreateTypeQueryForCoercedInput} from '@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from './getCurrentUser.action';
import ICurrentUser from '../../../assets/shared/types/user/currentUser.interface';

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('token');
        if (!token) {
          return of(getCurrentUserFailureAction());
        }
        return this.authService.fetchCurrentUser().pipe(
          map((currentUser: ICurrentUser) => {
            return getCurrentUserSuccessAction({
              currentUser,
            });
          }),
          catchError(() => {
            return of(getCurrentUserFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistenceService
  ) {}
}
