import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'
const MaterialComponent =
  [
    MatButtonModule,
    MatMenuModule,
    MatIconModule, MatListModule,
    MatToolbarModule
  ]
@NgModule({


  imports: [
    MaterialComponent
  ],
  exports: [
    MaterialComponent
  ]
})
export class MaterialModuleModule { }
