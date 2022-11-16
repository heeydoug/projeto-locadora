import {Item} from "../../item/models/item";
import {Cliente} from "../../cliente/models/cliente";


export interface Locacao {
  _id: string;
  dtLocacao: string;
  dtDevolucaoPrevista: string;
  dtDevolucaoEfetiva: string;
  valorCobrado: number;
  multaCobrada: number;
  item: Item;
  cliente: Cliente;
}
