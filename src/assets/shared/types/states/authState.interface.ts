import ICurrentUser from '../user/currentUser.interface';
import IBackendErrors from '../errors/backe.dErrors.interface';

export default interface AuthStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: IBackendErrors | null;
}
