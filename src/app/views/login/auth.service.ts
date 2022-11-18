import {EventEmitter, Injectable} from '@angular/core';
import {Usuario} from "./usuario";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuNavBarEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  fazerLogin(usuario: Usuario) {

    if(usuario.nome === 'admin' && usuario.senha === 'admin') {
      this.usuarioAutenticado = true;
      this.mostrarMenuNavBarEmitter.emit(true);
      this.router.navigate(['/']);
    }
    else{
      this.usuarioAutenticado = false;
      this.mostrarMenuNavBarEmitter.emit(false);
    }
  }
}
