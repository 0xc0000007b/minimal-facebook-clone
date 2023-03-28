import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getFeedAction} from '../../../Store/Feed/Actions/GetFeed.actions';
import {map, Observable, Subscription} from 'rxjs';
import {IFeedResponse} from '../../../../assets/shared/types/feed/feedResponse.interface';
import {
  FeedSelector,
  IsErrorSelector,
  IsLoadingSelector,
} from '../../../Store/Feed/Selectors/feed.selectors';
import {environment} from '../../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';

import queryString from 'query-string';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent
  implements OnInit, OnDestroy, OnChanges
{
  @Input('apiUrl') apiUrlProps: any;
  feed$: Observable<IFeedResponse | null>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean>;
  limit: number = environment.limit;
  baseUrl: string;
  queryParamsSubscription: Subscription;
  currentPage: number;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  initializeListeners(): void {
    this.queryParamsSubscription =
      this.route.queryParams.subscribe((params) => {
        this.currentPage = Number(params['page'] || '1');
      });
    this.fetchFeed();
  }

  initializeValues(): void {
    this.feed$ = this.store.pipe(select(FeedSelector));
    this.error$ = this.store.pipe(select(IsErrorSelector));
    this.isLoading$ = this.store.pipe(
      select(IsLoadingSelector)
    );
    this.baseUrl = this.router.url.split('?')[0];
  }

  fetchFeed(): void {
    const offset =
      this.currentPage * this.limit - this.limit;
    const parsedUrl = queryString.parseUrl(
      this.apiUrlProps
    );
    const stringParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    const urlWithParams = `${parsedUrl.url}?${stringParams}`;
    this.store.dispatch(
      getFeedAction({url: urlWithParams})
    );
    console.log(urlWithParams);
  }
  ngOnChanges(changes: SimpleChanges) {
    const apiUrlChanged =
      !changes['apiUrlProps'].firstChange &&
      changes['apiUrlProps'].currentValue !=
        changes['apiUrlProps'].previousValue;
    if (apiUrlChanged) this.fetchFeed();
  }
}
