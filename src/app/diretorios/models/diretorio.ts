import { Arquivo } from "./arquivo";

export interface Diretorio {
  idDiretorio: number;
  nomeDiretorio: string;
  diretoriosFilhos?: Diretorio[];
  arquivos?: Arquivo[];
  idDiretorioPai: number;
}
