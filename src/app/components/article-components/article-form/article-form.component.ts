import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {IArticleInput} from '../../../../assets/shared/types/article/articleInput.interface';
import IBackendErrors from '../../../../assets/shared/types/errors/backe.dErrors.interface';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ArticleInputInterface} from '../../../../assets/shared/types/articleInput.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues')
  initialValuesProps: ArticleInputInterface;
  @Input('IsSubmitting') isSubmitting: boolean;
  @Input('errors') errorProps: IBackendErrors | null;
  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<ArticleInputInterface>();
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      body: this.initialValuesProps.body,
      description: this.initialValuesProps.description,
      tagList: this.initialValuesProps.tagList.join(' '),
      title: this.initialValuesProps.title,
    });
  }
  onsubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }
}
