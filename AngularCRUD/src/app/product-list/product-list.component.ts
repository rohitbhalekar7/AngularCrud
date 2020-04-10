import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

export interface IProds {
  name: string;
  id: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  prod;
  selectedOptions = '';
  //

  ProdLists: IProds[] = [];
  delarr: [] = [];
  constructor() { }
  ngOnInit(): void {
    this.prod = '';
  }
  addItem(): void {
    if (this.prod !== '') {

      this.ProdLists.push({
        name: this.prod,
        id: this.ProdLists.length + 1
      });
      this.prod = '';
    }
  }
  delItem(): void {
    console.log(this.delarr);
    this.delarr.forEach(element => {
      this.ProdLists = this.ProdLists.filter(e => e.id !== element);
    });
  }
  onNgModelChange($event): void {
    // console.log(this.selectedOptions);
    this.delarr = [];
    this.delarr = $event;
  }

}
