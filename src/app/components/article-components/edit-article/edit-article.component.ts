import {Component, OnInit} from '@angular/core';
import {filter, map, Observable} from 'rxjs';
import IBackendErrors from '../../../../assets/shared/types/errors/backe.dErrors.interface';
import {select, Store} from '@ngrx/store';
import {
  ArticleSelector,
  ErrorSelector,
  IsLoadingSelector,
  IsSubmittingSelector,
} from '../../../Store/Articles/Selectors/update/selectors';
import {getArticlesAction} from '../../../Store/Articles/Actions/Update/GetArticlec.actions]';
import {ActivatedRoute} from '@angular/router';
import {updateArticlesAction} from '../../../Store/Articles/Actions/Update/UpdateArticle.actions';
import {ArticleInterface} from '../../../../assets/shared/types/article/article.interface';
import {ArticleInputInterface} from '../../../../assets/shared/types/articleInput.interface';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  public initialValues$: Observable<ArticleInputInterface>;
  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  backendErrors$: Observable<IBackendErrors | null>;
  slug: string;

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initialValues();
    this.fetchData();
  }

  initialValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.pipe(
      select(IsSubmittingSelector)
    );
    this.isLoading$ = this.store.pipe(
      select(IsLoadingSelector)
    );
    this.backendErrors$ = this.store.pipe(
      select(ErrorSelector)
    );
    this.initialValues$ = this.store.pipe(
      select(ArticleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        };
      })
    );
  }

  fetchData(): void {
    this.store.dispatch(
      getArticlesAction({slug: this.slug})
    );
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(
      updateArticlesAction({articleInput, slug: this.slug})
    );
  }
}
