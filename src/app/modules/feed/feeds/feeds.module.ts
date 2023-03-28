import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from '../../../components/feed-components/feed/feed.component';
import {EffectsModule} from '@ngrx/effects';
import {GetFeedEffect} from '../../../Store/Feed/Effects/GetFeed.effect';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../../../Store/Feed/Reducers/reducers';
import {FeedsService} from '../../../services/feeds.service';
import {RouterModule} from '@angular/router';
import {ErrorMessagesModule} from '../../errors/error-messages/error-messages.module';
import {LoadingComponent} from '../../../components/other/loading/loading.component';
import {LoadingModule} from '../../other/loading/loading.module';
import {PaginationModule} from '../../other/pagination/pagination.module';
import {TaglistModule} from '../tags/taglist/taglist.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    RouterModule,
    ErrorMessagesModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    LoadingModule,
    PaginationModule,
    TaglistModule,
  ],
  providers: [FeedsService],
  exports: [FeedComponent],
})
export class FeedsModule {}
