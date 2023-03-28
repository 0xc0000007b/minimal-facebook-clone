//angular and additional libs
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';

//components
import {RegisterComponent} from '../../../components/auth-components/register/register.component';
import {LoginComponent} from '../../../components/auth-components/login/login.component';
import {reducers} from '../../../Store/Auth/Reducers/auth.reducers';
import {AuthService} from '../../../services/auth.service';

import {HoverDirective} from '../../../directives/hover.directive';
import {EffectsModule} from '@ngrx/effects';
import {RegisterEffects} from '../../../Store/Auth/Effects/register.effects';
import {AppModule} from '../../../app.module';
import {BackendErrorsModule} from '../../errors/backend-errors/backend-errors.module';
import {PersistenceService} from '../../../services/persistence.service';
import {LoginEffects} from '../../../Store/Auth/Effects/login.effect';
import {GetCurrentUserEffect} from '../../../Store/Auth/getCurrentUser.effect';
import {UpdateUserEffect} from '../../../Store/Auth/Effects/UpdateUser.effect';
import {SettingsModule} from '../settings/settings.module';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    HoverDirective,
  ],
  providers: [AuthService, PersistenceService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    ReactiveFormsModule,
    EffectsModule.forFeature([
      RegisterEffects,
      LoginEffects,
      GetCurrentUserEffect,
      UpdateUserEffect,
    ]),
    BackendErrorsModule,
  ],
})
export class AuthModule {}
