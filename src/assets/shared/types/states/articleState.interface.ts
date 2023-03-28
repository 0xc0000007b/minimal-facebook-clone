import {ArticleInterface} from '../article/article.interface';

export default interface ArticleStateInterface {
  isLoading: boolean;
  error: string | null;
  data: ArticleInterface | null;
}
