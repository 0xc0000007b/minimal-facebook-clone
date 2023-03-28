import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ValidatorsCustom} from '../../validators/email.validators';
import {Observable} from 'rxjs';
import IBackendErrors from '../../../../assets/shared/types/errors/backe.dErrors.interface';
import {select, Store} from '@ngrx/store';
import {
  IsSubmittingSelector,
  ValidationErrorsSelector,
} from '../../../Store/Auth/Selectors/auth.selectors';
import ILoginRequest from '../../../../assets/shared/types/auth/loginRequest.interface';
import {loginStart} from '../../../Store/Auth/Actions/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup = this.fb.group({
    username: [''],
    email: ['', [ValidatorsCustom.emailValid]],
    password: [''],
  });

  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<IBackendErrors | null>;
  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {}
  ngOnInit(): void {
    this.initializeForm();
    this.initializeVals();
  }

  initializeForm(): void {
    console.log(this.form.value);
  }

  submit() {
    const request: ILoginRequest = {
      user: this.form.value,
    };
    this.store.dispatch(loginStart({request}));
  }

  private initializeVals() {
    this.isSubmitting$ = this.store.pipe(
      select(IsSubmittingSelector)
    );
    this.backendErrors$ = this.store.pipe(
      select(ValidationErrorsSelector)
    );
  }
}
