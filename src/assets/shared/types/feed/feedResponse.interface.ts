import {ArticleInterface} from '../article/article.interface';

export interface IFeedResponse {
  articles: ArticleInterface[];
  articlesCount: number;
}
