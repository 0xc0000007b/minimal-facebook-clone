import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  CreateArticleAction,
  CreateArticleFailureAction,
  CreateArticleSuccessAction,
} from '../Actions/CreateArticle.actions';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {CreatePostService} from '../../../services/create-post.service';
import {Router} from '@angular/router';
import {ArticleInterface} from '../../../../assets/shared/types/article/article.interface';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class CreateArticleEffects {
  createArticle$ = createEffect(() =>
    this.action.pipe(
      ofType(CreateArticleAction),
      switchMap(({articleInput}) => {
        return this.articleService
          .createArticle(articleInput)
          .pipe(
            map((article: ArticleInterface) => {
              return CreateArticleSuccessAction({article});
            }),
            catchError((errors: HttpErrorResponse) => {
              return of(
                CreateArticleFailureAction({
                  errors: errors.error.errors,
                })
              );
            })
          );
      })
    )
  );

  redirectAfterCreate$ = createEffect(
    () =>
      this.action.pipe(
        ofType(CreateArticleSuccessAction),
        tap(({article}) => {
          this.router.navigate(['/articles', article.slug]);
        })
      ),
    {dispatch: false}
  );

  constructor(
    private action: Actions,
    private articleService: CreatePostService,
    private router: Router
  ) {}
}
