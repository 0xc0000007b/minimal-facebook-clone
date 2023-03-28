import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IArticleInput} from '../../assets/shared/types/article/articleInput.interface';
import {map, Observable} from 'rxjs';
import {ArticleInterface} from '../../assets/shared/types/article/article.interface';
import {environment} from '../../environments/environment';
import {SaveArticleResponseInterface} from '../../assets/shared/types/article/saveArticleResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class CreatePostService {
  constructor(private http: HttpClient) {}

  createArticle(
    articleInput: IArticleInput
  ): Observable<ArticleInterface> {
    const fullUrl = environment.baseUrl + '/articles';
    return this.http
      .post<SaveArticleResponseInterface>(
        fullUrl,
        articleInput
      )
      .pipe(
        map((response: SaveArticleResponseInterface) => {
          return response.article;
        })
      );
  }
}
