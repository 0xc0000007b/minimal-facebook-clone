import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YourFeedComponent} from '../../../components/feed-components/your-feed/your-feed.component';
import {Route, RouterModule} from '@angular/router';
import {FeedsModule} from '../feeds/feeds.module';
import {BannerModule} from '../../other/banner/banner.module';
import {PupolarTagsModule} from '../tags/pupolar-tags/pupolar-tags.module';
import {FeedsTogglerModule} from '../feeds-toggler/feeds-toggler.module';

const routes: Route[] = [
  {path: 'feed', component: YourFeedComponent},
];

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedsModule,
    BannerModule,
    PupolarTagsModule,
    FeedsTogglerModule,
  ],
  exports: [YourFeedComponent],
})
export class YourFeedModule {}
