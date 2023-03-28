import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  getArticlesAction,
  getArticlesFailureAction,
  getArticleSuccessAction,
} from '../../Actions/Update/GetArticlec.actions]';
import {catchError, map, of, switchMap} from 'rxjs';
import {ArticlesService} from '../../../../services/articles.service';
import {ArticleInterface} from '../../../../../assets/shared/types/article/article.interface';

@Injectable()
export class GetArticleEffects {
  getArticles$ = createEffect(() =>
    this.action.pipe(
      ofType(getArticlesAction),
      switchMap(({slug}) => {
        return this.articlesService
          .getArticle(slug)
          .pipe(
            map((article: ArticleInterface) =>
              getArticleSuccessAction({article})
            )
          );
      }),
      catchError(() => of(getArticlesFailureAction))
    )
  );
  constructor(
    private action: Actions,
    private articlesService: ArticlesService
  ) {}
}
