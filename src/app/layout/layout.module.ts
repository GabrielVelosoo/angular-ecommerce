import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {SidebarCategoriasComponent} from './components/sidebar-categorias/sidebar-categorias.component';

@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    FooterComponent,
    SidebarCategoriasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    MenuComponent,
    FooterComponent,
    SidebarCategoriasComponent
  ]
})
export class LayoutModule { }
