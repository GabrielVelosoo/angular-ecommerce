export class Categoria {
  id: number = 0;
  nome: string = '';
  slug: string = '';
  subcategorias: Categoria[] = [];
}
