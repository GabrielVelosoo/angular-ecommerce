import { Categoria } from './Categoria';

export class Produto {
  id!: number;
  nome!: string;
  descricao!: string;
  preco!: number;
  quantidadeEstoque!: number;
  imagem!: File;
  imagemUrl!: string;
  categoria!: Categoria;
}
