import {Component, Input, OnInit} from '@angular/core';
import IBackendErrors from '../../../../assets/shared/types/errors/backe.dErrors.interface';

@Component({
  selector: 'ld-backend-error-messages',
  templateUrl: './backend-errors.component.html',
  styleUrls: ['./backend-errors.component.scss'],
})
export class BackendErrorsComponent implements OnInit {
  @Input('errors') backendErrorProps: IBackendErrors;
  errorMsgs: string[];

  ngOnInit() {
    this.errorMsgs = Object.keys(
      this.backendErrorProps
    ).map((name: string) => {
      const msgs = this.backendErrorProps[name].join(', ');
      return `${name} ${msgs}`;
    });
  }
}
