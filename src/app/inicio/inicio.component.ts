import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  textoForm: string = 'Iniciar sesión';
  textoBoton: string = 'Enviar';
  login: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeForm() {
    this.login = !this.login;
    if(this.login) {
      this.textoForm = 'Iniciar sesión';
      this.textoBoton = 'Enviar';
    } else {
      this.textoForm = 'Crear usuario';
      this.textoBoton = 'Añadir'
    }
  }

}
