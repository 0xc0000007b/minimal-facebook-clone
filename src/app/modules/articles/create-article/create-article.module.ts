import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateArticleComponent} from '../../../components/article-components/create-article/create-article.component';
import {Route, RouterModule} from '@angular/router';
import {ArticleFormModule} from '../article-form/article-form.module';
import {CreatePostService} from '../../../services/create-post.service';
import {EffectsModule} from '@ngrx/effects';
import {CreateArticleEffects} from '../../../Store/Articles/Effects/CreateArticle.effects';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../../../Store/Articles/Reducers/create/reducers';
import {ArticlesService} from '../../../services/articles.service';
const routes: Route[] = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
];
@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffects]),
    StoreModule.forFeature('createArticle', reducers),
  ],
  providers: [CreatePostService, ArticlesService],
  exports: [CreateArticleComponent],
})
export class CreateArticleModule {}
