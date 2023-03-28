import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {isLoggedInSelector} from '../../../Store/Auth/Selectors/auth.selectors';

@Component({
  selector: 'app-feeds-toggler',
  templateUrl: './feeds-toggler.component.html',
})
export class FeedsTogglerComponent implements OnInit {
  @Input('tagName') tagNameProps: string | null;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues() {
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedInSelector)
    );
  }
}
