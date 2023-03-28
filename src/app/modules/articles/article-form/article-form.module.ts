import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleFormComponent} from '../../../components/article-components/article-form/article-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ErrorMessagesModule} from '../../errors/error-messages/error-messages.module';
import {BackendErrorsModule} from '../../errors/backend-errors/backend-errors.module';

@NgModule({
  declarations: [ArticleFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorMessagesModule,
    BackendErrorsModule,
  ],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
