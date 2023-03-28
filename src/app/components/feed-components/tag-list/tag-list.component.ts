import {Component, Input} from '@angular/core';
import {PopularTagsType} from '../../../../assets/shared/types/article/PopularTagsType';
import IPopularTags from '../../../../assets/shared/types/article/getPopularTagsResponse.interface';
import GetPopularTagsResponseInterface from '../../../../assets/shared/types/article/getPopularTagsResponse.interface';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
})
export class TagListComponent {
  @Input('tags')
  tagsProps: GetPopularTagsResponseInterface[];
}
