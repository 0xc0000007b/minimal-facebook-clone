import {Injectable} from '@angular/core';
import ICurrentUser from '../../assets/shared/types/user/currentUser.interface';
import IRegisterRequest from '../../assets/shared/types/auth/registerRequest.interface';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.development';
import IAuthResponse from '../../assets/shared/types/auth/authResponse.interface';
import ILoginRequest from '../../assets/shared/types/auth/loginRequest.interface';
import ICurrentUserInput from '../../assets/shared/types/user/currentUserInput.interface';
import {CurrentUserInterface} from '../../assets/shared/types/currentUser.interface';
import {CurrentUserInputInterface} from '../../assets/shared/types/currentUserInput.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  mapUsers(resp: IAuthResponse): CurrentUserInterface {
    return resp.user;
  }
  register(
    data: IRegisterRequest
  ): Observable<CurrentUserInterface> {
    const url = environment.baseUrl + '/users';
    return this.http
      .post<IAuthResponse>(url, data)
      .pipe(map(this.mapUsers));
  }

  login(
    data: ILoginRequest
  ): Observable<CurrentUserInterface> {
    const url = environment.baseUrl + '/users/login';
    return this.http
      .post<IAuthResponse>(url, data)
      .pipe(map(this.mapUsers));
  }

  fetchCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.baseUrl + '/user';
    return this.http.get(url).pipe(map(this.mapUsers));
  }

  updateCurrentUser(
    CurrentUserInput: CurrentUserInputInterface
  ): Observable<CurrentUserInterface> {
    const url = environment.baseUrl + '/user';
    return this.http.put<CurrentUserInterface>(
      url,
      CurrentUserInput
    );
  }
  constructor(private http: HttpClient) {}
}
