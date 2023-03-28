import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationComponent} from '../../../components/other/pagination/pagination.component';
import {UtilsService} from '../../../services/utils.service';
import {RouterLink} from '@angular/router';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, RouterLink],
  exports: [PaginationComponent],
  providers: [UtilsService],
})
export class PaginationModule {}
