import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {PopularTagsType} from '../../assets/shared/types/article/PopularTagsType';
import {environment} from '../../environments/environment';
import IPopularTags from '../../assets/shared/types/article/getPopularTagsResponse.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetPopularTagsService {
  getAllTags(): Observable<PopularTagsType[]> {
    const url = environment.baseUrl + '/tags';
    return this.http.get(url).pipe(
      map((res: IPopularTags) => {
        return res.tags;
      })
    );
  }
  constructor(private http: HttpClient) {}
}
