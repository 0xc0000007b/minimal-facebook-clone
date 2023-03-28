import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import ICurrentUser from '../../../../assets/shared/types/user/currentUser.interface';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from '../../../Store/Auth/Selectors/auth.selectors';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<ICurrentUser | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedInSelector)
    );
    this.isAnonymous$ = this.store.pipe(
      select(isAnonymousSelector)
    );
    this.currentUser$ = this.store.pipe(
      select(currentUserSelector)
    );
  }
}
