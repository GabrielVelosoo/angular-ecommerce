import { Categoria } from './Categoria';

export class Produto {
  id!: number;
  nome: string = '';
  descricao: string = '';
  preco: number = 0;
  quantidadeEstoque: number = 0;
  imagem!: File;
  imagemUrl: string = '';
  categoria: Categoria = new Categoria();
}
