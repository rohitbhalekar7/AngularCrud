import { Component, OnInit } from '@angular/core';
import { IProdView } from '../Shared/IProdView';

const conProdList: IProdView[] = [
  { id: 1, name: 'adasd', add: 'dasdasdsa' },
  {
    id: 2, name: 'adasd', add: 'dasdasdsa'
  }, {
    id: 2, name: 'dasdas', add: 'dsadsad'
  }

];
@Component({
  selector: 'app-prod-view',
  templateUrl: './prod-view.component.html',
  styleUrls: ['./prod-view.component.css']
})

export class ProdViewComponent implements OnInit {

  constructor() { }

  ProdList = conProdList;
  ngOnInit(): void {

  }
}
