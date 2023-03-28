import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, of, switchMap} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ArticlesService as SharedArticleService} from '../../../services/articles.service';
import {
  getArticlesAction,
  getArticlesFailureAction,
  getArticlesSuccessAction,
} from '../Actions/GetArticles.actions';
import {ArticleInterface} from '../../../../assets/shared/types/article/article.interface';

@Injectable()
export class GetArticleEffect {
  constructor(
    private articles: SharedArticleService,
    private action$: Actions
  ) {}
  getArticles$ = createEffect(() => {
    return this.action$.pipe(
      ofType(getArticlesAction),
      switchMap(({slug}) => {
        return this.articles.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticlesSuccessAction({
              article: article,
            });
          }),
          catchError(() => {
            return of(getArticlesFailureAction);
          })
        );
      })
    );
  });
}
