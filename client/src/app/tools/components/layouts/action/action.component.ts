import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAction, IKeyValue } from 'app/tools/schema.model';

@Component({
  selector: 'ab-action',
  templateUrl: './action.component.html',
  styles: []
})
export class ActionComponent implements OnInit {
  @Input() schema: IAction;
  @Input() btnClass?= 'btn-primary';
  @Output() action = new EventEmitter<IKeyValue>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.action.emit({ key: this.schema.key, value: this.schema.value });
  }

  getClass(value) {
    switch (value) {
      case 'default':
        return 'btn';
      default:
        return 'btn btn-primary';
    }
  }
}
