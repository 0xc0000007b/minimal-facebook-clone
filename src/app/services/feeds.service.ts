import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {IFeedResponse} from '../../assets/shared/types/feed/feedResponse.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeedsService {
  constructor(private http: HttpClient) {}

  getFeed(apiUrl: string): Observable<IFeedResponse> {
    const fullUrl = environment.baseUrl + apiUrl;
    return this.http.get<IFeedResponse>(fullUrl);
  }
}
