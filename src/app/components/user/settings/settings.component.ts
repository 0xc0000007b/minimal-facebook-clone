import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {PersistenceService} from '../../../services/persistence.service';
import {Router} from '@angular/router';
import {Form, FormBuilder, FormGroup} from '@angular/forms';
import ICurrentUser from '../../../../assets/shared/types/user/currentUser.interface';
import {filter, Observable, Subscription} from 'rxjs';
import {currentUserSelector} from '../../../Store/Auth/Selectors/auth.selectors';
import IBackendErrors from '../../../../assets/shared/types/errors/backe.dErrors.interface';
import {updateUserStartAction} from '../../../Store/Auth/Actions/Update/UpdateCurrentUser.actions';
import {
  IsSubmittingSelector,
  ValidationErrorsSelector,
} from '../../../Store/Auth/Selectors/updateUser.selectors';
import {IsErrorSelector} from '../../../Store/Feed/Selectors/feed.selectors';
import ICurrentUserInput from '../../../../assets/shared/types/user/currentUserInput.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent
  implements OnInit, OnDestroy
{
  form: FormGroup;
  currentUser: ICurrentUser;
  currentUser$: Subscription;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<IBackendErrors | null>;

  constructor(
    private store: Store,
    private persistence: PersistenceService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  closeUser(): void {
    this.persistence.delete('token');
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.currentUser$.unsubscribe();
  }

  private initializeListeners(): void {
    this.currentUser$ = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe(
        (user: ICurrentUser) => (
          (this.currentUser = user), this.initializeForm()
        )
      );
  }

  onSubmit() {
    console.log(this.form.value);
    const mergedInputValues = {
      ...this.currentUser,
      ...this.form.value,
    };
    this.store.dispatch(
      updateUserStartAction({
        currentUserInput: mergedInputValues,
      })
    );
  }

  private initializeForm() {
    this.form = this.fb.group({
      email: this.currentUser.email,
      password: '',
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      image: this.currentUser.image,
      token: this.currentUser.token,
    });
  }

  private initializeValues() {
    this.isSubmitting$ = this.store.pipe(
      select(IsSubmittingSelector)
    );
    this.backendErrors$ = this.store.pipe(
      select(ValidationErrorsSelector)
    );
  }
}
