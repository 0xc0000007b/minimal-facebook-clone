import {PopularTagType} from '../popularTag.type';
import {ProfileInterface} from '../profile.interface';
import GetPopularTagsResponseInterface from './getPopularTagsResponse.interface';

export interface ArticleInterface {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: GetPopularTagsResponseInterface[];
  description: string;
  author: ProfileInterface;
  favorited: boolean;
  favoritesCount: number;
}
