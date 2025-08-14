import { Categoria } from './Categoria';

export class Produto {
  id: number = 0;
  nome: string = '';
  descricao: string = '';
  preco: number = 0;
  quantidadeEstoque: number = 0;
  imagemUrl: string = '';
  categoria: Categoria = new Categoria();
}
