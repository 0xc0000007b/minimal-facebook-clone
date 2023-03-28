import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedsTogglerComponent} from '../../../components/feed-components/feeds-toggler/feeds-toggler.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [FeedsTogglerComponent],
  imports: [CommonModule, RouterModule],
  exports: [FeedsTogglerComponent],
})
export class FeedsTogglerModule {}
