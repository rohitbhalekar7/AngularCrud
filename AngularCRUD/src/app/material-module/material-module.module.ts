import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
const MaterialComponent =
  [
    MatButtonModule,
    MatMenuModule,
    MatIconModule, MatListModule,
    MatInputModule,
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
