import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {FeedsModule} from '../../feeds/feeds.module';
import {BannerModule} from '../../../other/banner/banner.module';
import {PupolarTagsModule} from '../pupolar-tags/pupolar-tags.module';
import {FeedsTogglerModule} from '../../feeds-toggler/feeds-toggler.module';
import {TagFeedComponent} from '../../../../components/feed-components/tagfeed/tag-feed.component';

const routes: Route[] = [
  {path: 'tags/:slug', component: TagFeedComponent},
];

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FeedsModule,
    BannerModule,
    PupolarTagsModule,
    FeedsTogglerModule,
  ],
  exports: [TagFeedComponent],
})
export class TagFeedModule {}
