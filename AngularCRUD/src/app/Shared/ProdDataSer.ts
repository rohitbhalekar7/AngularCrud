import { Injectable } from '@angular/core';
import { IProduct } from '../data-table-example/data-table-example.component';

@Injectable({
    providedIn: 'root'

})
export class ProdDataSer {
    getProdData(): IProduct[] {
        return [
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
    }
}
