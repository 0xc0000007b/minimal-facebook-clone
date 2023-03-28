import IPopularTags from './getPopularTagsResponse.interface';

export interface IArticleInput {
  body: string;
  description: string;
  tagList: IPopularTags[];
  title: string;
}
