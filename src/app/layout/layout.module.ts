import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    MenuComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
