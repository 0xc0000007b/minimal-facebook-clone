import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditArticleComponent} from '../../../components/article-components/edit-article/edit-article.component';
import {Route, RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {UpdateArticleEffects} from '../../../Store/Articles/Effects/Update/UpdateArticle.effects';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from '../../../Store/Articles/Reducers/update/reducers';
import {ArticlesService} from '../../../services/articles.service';
import {ArticleFormModule} from '../article-form/article-form.module';
import {LoadingModule} from '../../other/loading/loading.module';
import {GetArticleEffects} from '../../../Store/Articles/Effects/Update/GetArticle.effects';

const routes: Route[] = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      UpdateArticleEffects,
      GetArticleEffects,
    ]),
    StoreModule.forFeature('editArticle', reducers),
    RouterModule.forChild(routes),
    ArticleFormModule,
    LoadingModule,
  ],
  providers: [ArticlesService],
})
export class EditPostModule {}
