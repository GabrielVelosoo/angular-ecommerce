import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Categoria } from '../../../models/produto/Categoria';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  onFechar() {
    this.fechar.emit();
  }

  abrirSubcategoria(subcategoria: Categoria) {
    if(!this.categoriaSelecionada) return;
    this.router.navigate([`/category/${this.categoriaSelecionada.slug}/${subcategoria.slug}`]).then();
  }
}
