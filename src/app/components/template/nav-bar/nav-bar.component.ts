import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../views/login/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  showFiller = false;

  mostrarMenu: boolean = true;

  constructor(private authService: AuthService) {

  }

  ngOnInit(){
    this.authService.mostrarMenuNavBarEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

  }

}
