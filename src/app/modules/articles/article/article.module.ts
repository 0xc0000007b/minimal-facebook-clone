import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../../../Store/Articles/Reducers/reducers';
import {Route, RouterModule} from '@angular/router';
import {ErrorMessagesModule} from '../../errors/error-messages/error-messages.module';
import {LoadingModule} from '../../other/loading/loading.module';
import {ArticleComponent} from '../../../components/article-components/article/article.component';
import {GetArticleEffect} from '../../../Store/Articles/Effects/GetArticle.effect';
import {ArticlesService} from '../../../services/articles.service';
import {TaglistModule} from '../../feed/tags/taglist/taglist.module';
import {DeleteArticleEffect} from '../../../Store/Articles/Effects/DeleteArticle.effect';

const routes: Route[] = [
  {
    path: 'article-components/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ErrorMessagesModule,
    EffectsModule.forFeature([
      GetArticleEffect,
      DeleteArticleEffect,
    ]),
    StoreModule.forFeature('article', reducers),
    LoadingModule,
    TaglistModule,
  ],
  providers: [ArticlesService],
  exports: [ArticleComponent],
})
export class ArticleModule {}
