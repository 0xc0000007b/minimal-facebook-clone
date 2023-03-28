import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {GlobalFeedComponent} from '../../../components/feed-components/global-feed/global-feed.component';
import {FeedsModule} from '../feeds/feeds.module';
import {BannerModule} from '../../other/banner/banner.module';
import {PupolarTagsModule} from '../tags/pupolar-tags/pupolar-tags.module';
import {FeedsTogglerModule} from '../feeds-toggler/feeds-toggler.module';

const routes: Route[] = [
  {path: '', component: GlobalFeedComponent},
];

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FeedsModule,
    BannerModule,
    PupolarTagsModule,
    FeedsTogglerModule,
  ],
})
export class GlobalFeedModule {}
