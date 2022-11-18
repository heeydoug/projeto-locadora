import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../views/login/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mostrarMenu: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router) {

  }

  ngOnInit(){
    this.authService.mostrarMenuNavBarEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

  }

  login() {
    this.mostrarMenu = false;
    this.router.navigate(['/login']);
  }
}
