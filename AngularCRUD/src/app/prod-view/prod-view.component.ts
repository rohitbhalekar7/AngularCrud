import { Component, OnInit } from '@angular/core';
import { IProdView } from '../Shared/IProdView';

const conProdList: IProdView[] = [
  { id: 1, name: 'Rohit', add: 'Panvel' },
  {
    id: 2, name: 'Vishal', add: 'Kamothe'
  }, {
    id: 2, name: 'Nitesh', add: 'govandi'
  }

];
@Component({
  selector: 'app-prod-view',
  templateUrl: './prod-view.component.html',
  styleUrls: ['./prod-view.component.css']
})

export class ProdViewComponent implements OnInit {

  Divselection: IProdView;
  constructor() { }
  ProdList = conProdList;
  ngOnInit(): void {

  }
  selectedDiv(item) {
    this.Divselection = item;
  }
}
