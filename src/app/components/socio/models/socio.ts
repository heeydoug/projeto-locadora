import {Cliente} from "../../cliente/models/cliente";

export interface Socio extends Cliente{
  cpf: string,
  endereco: string,
  telefone: string,
  dependentes: Cliente[]
}
