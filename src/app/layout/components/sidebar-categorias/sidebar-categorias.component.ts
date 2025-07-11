import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Categoria } from '../../../models/Categoria';

@Component({
  standalone: false,
  selector: 'app-sidebar-categorias',
  templateUrl: './sidebar-categorias.component.html',
  styleUrl: './sidebar-categorias.component.css'
})
export class SidebarCategoriasComponent {

  @Input()
  categoriaSelecionada!: Categoria | null;

  @Output()
  fechar = new EventEmitter<void>();

  onFechar() {
    this.fechar.emit();
  }
}
