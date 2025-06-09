import { CampoErro } from './CampoErro';

export class Erro {
  status: number = 0;
  mensagem: string = '';
  erros?: CampoErro[];
  timestamp: string = '';
}
