import {Ator} from "../../ator/models/ator";
import {Diretor} from "../../diretor/models/diretor";
import {Classe} from "../../classe/models/classe";

export interface Titulo {
  _id: string;
  nome: string;
  ano: string;
  sinopse: string;
  categoria: string;
  atores: Ator[];
  diretor?: Diretor;
  classe?: Classe;
}
