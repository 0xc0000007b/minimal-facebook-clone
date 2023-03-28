import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from './modules/other/auth/auth.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {
  routerReducer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import {BackendErrorsModule} from './modules/errors/backend-errors/backend-errors.module';
import {TimerDirective} from './directives/timer.directive';
import {TopbarModule} from './modules/other/topbar/topbar.module';
import {AuthInterceptor} from './services/auth-interxeptor.service';
import {PersistenceService} from './services/persistence.service';
import {GlobalFeedModule} from './modules/feed/global-feed/global-feed.module';
import {YourFeedModule} from './modules/feed/your-feed/your-feed.module';
import {TagFeedModule} from './modules/feed/tags/tag-feed/tag-feed.module';
import {ArticleModule} from './modules/articles/article/article.module';
import {CreateArticleModule} from './modules/articles/create-article/create-article.module';
import {EditPostModule} from './modules/articles/edit-post/edit-post.module';
import {SettingsModule} from './modules/other/settings/settings.module';
@NgModule({
  declarations: [AppComponent, TimerDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({router: routerReducer}, {}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    HttpClientModule,
    AuthModule,
    BackendErrorsModule,
    TopbarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    ArticleModule,
    CreateArticleModule,
    EditPostModule,
    SettingsModule,
  ],
  providers: [
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
