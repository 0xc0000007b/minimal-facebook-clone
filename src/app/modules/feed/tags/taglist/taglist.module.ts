import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagListComponent} from '../../../../components/feed-components/tag-list/tag-list.component';
import {RouterLink} from '@angular/router';

@NgModule({
  declarations: [TagListComponent],
  imports: [CommonModule, RouterLink],
  exports: [TagListComponent],
})
export class TaglistModule {}
