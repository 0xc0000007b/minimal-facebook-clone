import IBackendErrors from '../errors/backe.dErrors.interface';
import {ArticleInterface} from '../article/article.interface';

export default interface EditArticleStateInterface {
  isLoading: boolean;
  article: ArticleInterface;
  isSubmitting: boolean;
  validationErrors: IBackendErrors | null;
}
