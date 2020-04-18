import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { ProdViewComponent } from './prod-view/prod-view.component';

import { Routes, RouterModule } from '@angular/router';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { DataTableExampleComponent } from './data-table-example/data-table-example.component';
import { ChildDataTableDescComponent } from './child-data-table-desc/child-data-table-desc.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'prodview', component: ProdViewComponent },
  { path: 'prodlist', component: ProductListComponent },
  { path: 'DataTableExample', component: DataTableExampleComponent },
  { path: '', redirectTo: "/", pathMatch: 'full' }

];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProdViewComponent,
    ProdDetailsComponent,
    DataTableExampleComponent,
    ChildDataTableDescComponent

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
