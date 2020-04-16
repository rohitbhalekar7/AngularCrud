import { Component, OnInit } from '@angular/core';


export interface IProduct {
  Id: number;
  Name: string;
  ProdValue: number;
}
const ProdData: IProduct[] = [
  {
    Id: 1,
    Name: 'Rohit',
    ProdValue: 100
  }, {
    Id: 2,
    Name: 'Vinay',
    ProdValue: 1200
  }
  , {
    Id: 3,
    Name: 'Vishal',
    ProdValue: 1300
  }, {
    Id: 4,
    Name: 'Nitish',
    ProdValue: 1500
  }, {
    Id: 5,
    Name: 'Pratik',
    ProdValue: 1600
  }

];
@Component({
  selector: 'app-data-table-example',
  templateUrl: './data-table-example.component.html',
  styleUrls: ['./data-table-example.component.css']
})


export class DataTableExampleComponent implements OnInit {

  constructor() {
    console.log("constructor");
    this.FilterData = this.DataTableData;

  }
  DataTableData: IProduct[] = ProdData;
  FilterData: IProduct[];
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

    return this.DataTableData.filter(i =>

      i.Name.toLocaleLowerCase().indexOf(q) !== -1
    );
  }

  ngOnInit(): void {
  }

}
