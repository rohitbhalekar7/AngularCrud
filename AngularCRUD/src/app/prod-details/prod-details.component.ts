import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {

  @Input() selectedDiv;
  constructor() { }
  ngOnInit(): void {
  }

}
