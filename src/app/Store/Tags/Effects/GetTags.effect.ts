import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, of, switchMap} from 'rxjs';
import {IFeedResponse} from '../../../../assets/shared/types/feed/feedResponse.interface';
import {catchError} from 'rxjs/operators';
import {
  getTagsAction,
  getTagsSuccessAction,
  getTagsFailureAction,
} from '../Actions/GetTags.actions';
import {GetPopularTagsService} from '../../../services/get-popular-tags.service';
import IPopularTags from '../../../../assets/shared/types/article/getPopularTagsResponse.interface';
import {PopularTagsType} from '../../../../assets/shared/types/article/PopularTagsType';

@Injectable()
export class GetTagsEffect {
  constructor(
    private tagsService: GetPopularTagsService,
    private action$: Actions
  ) {}
  getTags$ = createEffect(() => {
    return this.action$.pipe(
      ofType(getTagsAction),
      switchMap(() => {
        return this.tagsService.getAllTags().pipe(
          map((tags: PopularTagsType[]) => {
            return getTagsSuccessAction({tags});
          }),
          catchError(() => {
            return of(getTagsFailureAction);
          })
        );
      })
    );
  });
}
