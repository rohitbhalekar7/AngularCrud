import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { IProduct } from '../data-table-example/data-table-example.component';


@Component({
  selector: 'app-child-data-table-desc',
  templateUrl: './child-data-table-desc.component.html',
  styleUrls: ['./child-data-table-desc.component.css']
})
export class ChildDataTableDescComponent implements OnChanges {

  constructor() { }
  @Input() ProdDetails: IProduct;
  @Output() OutProdDetails: EventEmitter<string> = new EventEmitter<string>();


  ngOnChanges(): void {
    this.ProdDetails.ProdValue = this.ProdDetails.ProdValue * 2;
  }
  onDetailsClick(): void {
    this.OutProdDetails.emit(`Porduct Name : ${this.ProdDetails.Name}`)
  }
}
