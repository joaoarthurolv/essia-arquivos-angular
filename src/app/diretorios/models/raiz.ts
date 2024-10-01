import { Arquivo } from "./arquivo";
import { Diretorio } from "./diretorio";

export interface Raiz {
  diretorios: Diretorio[];
  arquivos: Arquivo[];
}
