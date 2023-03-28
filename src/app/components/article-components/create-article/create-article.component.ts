import {Component, Input, OnInit} from '@angular/core';
import {IArticleInput} from '../../../../assets/shared/types/article/articleInput.interface';
import {select, Store} from '@ngrx/store';
import {CreateArticleAction} from '../../../Store/Articles/Actions/CreateArticle.actions';
import {Observable} from 'rxjs';
import IBackendErrors from '../../../../assets/shared/types/errors/backe.dErrors.interface';
import {
  ErrorSelector,
  IsSubmittingSelector,
} from '../../../Store/Articles/Selectors/createPost/selectors';
import {ArticleInputInterface} from '../../../../assets/shared/types/articleInput.interface';

@Component({
  selector: 'app-createPost-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<IBackendErrors | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(
      select(IsSubmittingSelector)
    );
    this.backendErrors$ = this.store.pipe(
      select(ErrorSelector)
    );
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(
      CreateArticleAction({articleInput})
    );
  }
}
