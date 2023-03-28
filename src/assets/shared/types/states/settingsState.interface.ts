import IBackendErrors from '../errors/backe.dErrors.interface';

export default interface SettingsStateInterface {
  isSubmitting: boolean;
  validationErrors: IBackendErrors | null;
}
