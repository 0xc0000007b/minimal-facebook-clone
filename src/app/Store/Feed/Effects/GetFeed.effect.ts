import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {FeedsService} from '../../../services/feeds.service';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from '../Actions/GetFeed.actions';
import {map, of, switchMap} from 'rxjs';
import {IFeedResponse} from '../../../../assets/shared/types/feed/feedResponse.interface';
import {catchError} from 'rxjs/operators';

@Injectable()
export class GetFeedEffect {
  constructor(
    private feedService: FeedsService,
    private action$: Actions
  ) {}
  getFeed$ = createEffect(() => {
    return this.action$.pipe(
      ofType(getFeedAction),
      switchMap(({url}) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: IFeedResponse) => {
            return getFeedSuccessAction({feed});
          }),
          catchError(() => {
            return of(getFeedFailureAction());
          })
        );
      })
    );
  });
}
