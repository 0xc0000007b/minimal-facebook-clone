import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  updateArticlesAction,
  updateArticlesFailureAction,
  updateArticlesSuccessAction,
} from '../../Actions/Update/UpdateArticle.actions';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {ArticlesService} from '../../../../services/articles.service';
import {ArticleInterface} from '../../../../../assets/shared/types/article/article.interface';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class UpdateArticleEffects {
  updateArticle$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateArticlesAction),
      switchMap(({slug, articleInput}) => {
        return this.updateArticleService
          .updateArticle(slug, articleInput)
          .pipe(
            map((article: ArticleInterface) => {
              return updateArticlesSuccessAction({article});
            }),

            catchError(
              (errorResponse: HttpErrorResponse) => {
                return of(
                  updateArticlesFailureAction({
                    errors: errorResponse.error.errors,
                  })
                );
              }
            )
          );
      })
    )
  );

  redirectAfterUpdate$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(updateArticlesSuccessAction),
        tap(({article}) => {
          this.router.navigate(['/articles', article.slug]);
        })
      ),
    {dispatch: false}
  );
  constructor(
    private action$: Actions,
    private updateArticleService: ArticlesService,
    private router: Router
  ) {}
}
