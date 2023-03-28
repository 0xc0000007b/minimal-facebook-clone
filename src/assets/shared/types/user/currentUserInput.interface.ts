import ICurrentUser from './currentUser.interface';

export default interface ICurrentUserInput
  extends ICurrentUser {
  password: string;
}
