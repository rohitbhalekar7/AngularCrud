import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../data-table-example/data-table-example.component';
import { Observable } from 'rxjs';
// import {} from 'rxjs/Operator';


@Injectable({
  providedIn: 'root'
})
export class ProdServiceService {
  // AngularCRUD\src\assets\ProdData.json
  prodUrl: string = 'assets/ProdData.json';
  constructor(private http: HttpClient) { }

  getProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.prodUrl).pipe(

    );
  }

}
