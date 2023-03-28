import {Component, Input, OnInit} from '@angular/core';
import {UtilsService} from '../../../services/utils.service';

@Component({
  selector: 'app-pagination',
  template: `<ul class="pagination">
    <li
      class="page-item"
      [ngClass]="{active: currPageProps === page}"
      *ngFor="let page of pages"
    >
      <a
        class="page-link"
        [routerLink]="urlProps"
        [queryParams]="{page: page}"
        >{{ page }}</a
      >
    </li>
  </ul>`,
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProps: number;
  @Input('currPage') currPageProps: number;
  @Input('limit') limitProps: number;
  @Input('url') urlProps: string;
  pagesCount: number;
  pages: number[];

  ngOnInit(): void {
    this.pagesCount = Math.ceil(
      this.totalProps / this.limitProps
    ) as number;
    this.pages = this.utils.range(1, this.pagesCount);
    console.log(this.pages);
    console.log(this.currPageProps);
  }
  constructor(private utils: UtilsService) {}
}
