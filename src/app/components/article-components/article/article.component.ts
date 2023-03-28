import {
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {
  combineLatest,
  map,
  Observable,
  Subscription,
} from 'rxjs';

import {
  ArticlesSelector,
  ErrorSelector,
  IsLoadingSelector,
} from '../../../Store/Articles/Selectors/selectors';
import {getArticlesAction} from '../../../Store/Articles/Actions/GetArticles.actions';
import {ActivatedRoute} from '@angular/router';
import {currentUserSelector} from '../../../Store/Auth/Selectors/auth.selectors';
import ICurrentUser from '../../../../assets/shared/types/user/currentUser.interface';
import {deleteArticleAction} from '../../../Store/Articles/Actions/DeleteArticles.actions';
import {ArticleInterface} from '../../../../assets/shared/types/article/article.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string;

  article: ArticleInterface | null;
  articleSub: Subscription;
  isLoading$: Observable<boolean>;
  isAuthor$: Observable<boolean>;
  error$: Observable<string | null>;
  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
    this.initListeners();
  }

  ngOnDestroy(): void {
    this.articleSub.unsubscribe();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(
      select(IsLoadingSelector)
    );
    this.error$ = this.store.pipe(select(ErrorSelector));
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(ArticlesSelector)),
      this.store.pipe(select(currentUserSelector))
    ).pipe(
      map(
        ([article, user]: [
          ArticleInterface | null,
          ICurrentUser | null
        ]) => {
          if (!user || !article) return false;
          return user.username === article.author.username;
        }
      )
    );
  }

  private fetchData() {
    this.store.dispatch(
      getArticlesAction({slug: this.slug})
    );
  }

  private initListeners() {
    this.articleSub = this.store
      .pipe(select(ArticlesSelector))
      .subscribe(
        (art: ArticleInterface | null) =>
          (this.article = art)
      );
  }

  delete(): void {
    this.store.dispatch(
      deleteArticleAction({slug: this.slug})
    );
  }
}
