import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsComponent} from '../../../components/user/settings/settings.component';
import {Route, RouterModule} from '@angular/router';
import {BackendErrorsModule} from '../../errors/backend-errors/backend-errors.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../../../Store/Auth/Reducers/updateUser.reducers';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Route[] = [
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BackendErrorsModule,
    StoreModule.forFeature('settings', reducers),

    ReactiveFormsModule,
  ],
  exports: [SettingsComponent],
})
export class SettingsModule {}
