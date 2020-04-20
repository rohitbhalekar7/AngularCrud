import { Component, OnInit } from '@angular/core';
import { ProdDataSer } from '../Shared/ProdDataSer';
import { ProdServiceService } from '../Shared/prod-service.service';
import { HttpErrorResponse } from '@angular/common/http';


export interface IProduct {
  Id: number;
  Name: string;
  ProdValue: number;
}

@Component({
  selector: 'app-data-table-example',
  templateUrl: './data-table-example.component.html',
  styleUrls: ['./data-table-example.component.css']
})


export class DataTableExampleComponent implements OnInit {

  constructor(private oProdDataSer: ProdServiceService) {
    // console.log("constructor");

  }
  DataTableData: IProduct[];
  FilterData: IProduct[];
  ChildData: string;
  private _filter_query: string = 'Rohit';
  get FilteredQuery(): string {
    return this._filter_query;
  }
  set FilteredQuery(v: string) {

    this._filter_query = v;
    this.FilterData = this.FilteredQuery ? this.PerformFilter(v) : this.DataTableData;
  }
  PerformFilter(q: string): IProduct[] {
    q = q.toLocaleLowerCase();
    return this.DataTableData.filter(i => i.Name.toLocaleLowerCase().indexOf(q) !== -1);
  }

  ngOnInit(): void {
    const $obs = this.oProdDataSer.getProduct().subscribe(
      data => {
        // this.DataTableData = data;
        this.FilterData = data;
      },
      err => console.error(err)
    );

  }
  ProductName(message: string): void {
    console.log(message);
    this.ChildData = message;
  }
}
