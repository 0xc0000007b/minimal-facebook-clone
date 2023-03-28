import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from '../../../components/other/banner/banner.component';

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule],
  exports: [BannerComponent],
})
export class BannerModule {}
