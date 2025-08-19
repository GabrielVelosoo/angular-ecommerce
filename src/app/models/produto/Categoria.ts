export class Categoria {
  id!: number;
  nome?: string;
  slug?: string;
  subcategorias?: Categoria[];
}
