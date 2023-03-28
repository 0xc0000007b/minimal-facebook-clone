import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopularTagsComponent} from '../../../../components/feed-components/popular-tags/popular-tags.component';
import {TaglistModule} from '../taglist/taglist.module';
import {GetPopularTagsService} from '../../../../services/get-popular-tags.service';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../../../../Store/Tags/Reducers/reducers';
import {EffectsModule} from '@ngrx/effects';
import {GetTagsEffect} from '../../../../Store/Tags/Effects/GetTags.effect';
import {LoadingModule} from '../../../other/loading/loading.module';
import {ErrorMessagesModule} from '../../../errors/error-messages/error-messages.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    TaglistModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetTagsEffect]),
    LoadingModule,
    ErrorMessagesModule,
    RouterModule,
  ],

  providers: [GetPopularTagsService],
  exports: [PopularTagsComponent],
})
export class PupolarTagsModule {}
