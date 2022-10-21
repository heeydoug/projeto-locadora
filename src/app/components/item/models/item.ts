import {Titulo} from "../../titulo/models/titulo";

export interface Item{
  _id: string,
  numserie: string,
  dtaquisicao: string,
  tipoItem: string,
  titulo: Titulo
};
