import {PopularTagsType} from './article/PopularTagsType';
import GetPopularTagsResponseInterface from './article/getPopularTagsResponse.interface';

export interface ArticleInputInterface {
  title: string;
  description: string;
  body: string;
  tagList: GetPopularTagsResponseInterface[];
}
