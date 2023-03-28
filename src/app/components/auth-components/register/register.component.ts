import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {ValidatorsCustom} from '../../validators/email.validators';

import {registerAction} from '../../../Store/Auth/Actions/register.action';
import {select, Store} from '@ngrx/store';
import IRegisterRequest from '../../../../assets/shared/types/auth/registerRequest.interface';
import {Observable} from 'rxjs';
import {
  IsSubmittingSelector,
  ValidationErrorsSelector,
} from '../../../Store/Auth/Selectors/auth.selectors';
import {AuthService} from '../../../services/auth.service';
import ICurrentUser from '../../../../assets/shared/types/user/currentUser.interface';
import IBackendErrors from '../../../../assets/shared/types/errors/backe.dErrors.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: [
      '',
      [Validators.required, ValidatorsCustom.emailValid],
    ],
    password: ['', Validators.required],
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
    const request: IRegisterRequest = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({request}));
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
