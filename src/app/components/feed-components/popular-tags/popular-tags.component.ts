import {Component, OnInit} from '@angular/core';
import {PopularTagsType} from '../../../../assets/shared/types/article/PopularTagsType';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {getTagsAction} from '../../../Store/Tags/Actions/GetTags.actions';
import {
  errorSelector,
  popularTagsIsLoadingSelector,
  popularTagsSelector,
} from '../../../Store/Tags/Selectors/selectors';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  tags$: Observable<PopularTagsType[] | null>;
  loading$: Observable<boolean>;
  errors$: Observable<string | null>;

  ngOnInit(): void {
    this.fetchTags();
    this.initValues();
  }
  private initValues(): void {
    this.tags$ = this.store.pipe(
      select(popularTagsSelector)
    );
    this.loading$ = this.store.pipe(
      select(popularTagsIsLoadingSelector)
    );
    this.errors$ = this.store.pipe(select(errorSelector));
  }
  private fetchTags(): void {
    this.store.dispatch(getTagsAction());
  }

  constructor(private store: Store) {}
}
