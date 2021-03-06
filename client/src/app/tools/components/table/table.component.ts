import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IReportSchema, IKeyValue, IField, IAction } from 'app/tools/schema.model';
import { SchemaService } from 'app/tools/components/schema.service';

@Component({
  selector: 'ab-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() public schema: IReportSchema;
  @Input() public data: any[];
  @Output() rowClick = new EventEmitter<any>();
  @Output() rowAction = new EventEmitter<IKeyValue>();

  constructor(private schemaService: SchemaService) { }

  ngOnInit() {
  }

  onRowClick(row) {
    this.rowClick.emit(row);
  }
  onHeaderClick(field: IField) {
    this.orderDataByKey(this.data, field.key)
  }

  orderDataByKey(values: any[], orderKey: any) {
    return this.schemaService.orderDataByKey(values, orderKey);
  }

  onActionClick(event, row) {
    this.rowAction.emit({ key: event.key, value: row });
  }

  valueByPath(target, path) {
    return this.schemaService.valueByPath(target, path);
  }

  transform(target, action: IAction) {
    if (action.dynamicLink && action.staticLink) {
      action.link = this.valueByPath(target, action.dynamicLink) + action.staticLink;
    }
    return action;
  }
}

