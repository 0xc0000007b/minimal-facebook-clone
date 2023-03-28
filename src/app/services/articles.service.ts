import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ArticleInterface} from '../../assets/shared/types/article/article.interface';
import {IArticleInput} from '../../assets/shared/types/article/articleInput.interface';
import {GetArticleResponseInterface} from '../../assets/shared/types/article/getArticleResponse.interface';
import {SaveArticleResponseInterface} from '../../assets/shared/types/article/saveArticleResponse.interface';
import {ArticleInputInterface} from '../../assets/shared/types/articleInput.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.baseUrl}/articles/${slug}`;
    return this.http
      .get<GetArticleResponseInterface>(fullUrl)
      .pipe(
        map(
          (res: GetArticleResponseInterface) => res.article
        )
      );
  }

  deleteArticle(slug: string): Observable<{}> {
    const url = `${environment.baseUrl}/articles/${slug}`;

    return this.http.delete<{}>(url);
  }
  updateArticle(
    slug: string,
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const fullUrl = `${environment.baseUrl}/articles/${slug}`;
    return this.http
      .put<SaveArticleResponseInterface>(
        fullUrl,
        articleInput
      )
      .pipe(
        map(
          (res: SaveArticleResponseInterface) => res.article
        )
      );
  }
}
