import IBackendErrors from '../errors/backe.dErrors.interface';

export interface CreateArticleStateInterface {
  isSubmitting: boolean;
  validationErrors: IBackendErrors | null;
}
