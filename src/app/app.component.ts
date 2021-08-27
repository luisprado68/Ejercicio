import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica vista en clase';
  miUsuario:Usuario;
  numero:any;
  numeroDos:any;
  suma:any;
  promedio:any;

  constructor(){
    this.miUsuario = new Usuario();
  }

  saludar(){
    console.log("Hola como estas?");
  }
  public calcular(){
    
      this.suma = this.numero + this.numeroDos;
      this.promedio = this.suma/2;
    
   
  }
  public limpiar(){
    this.suma = "";
    this.promedio = "";
    this.numero=0;
    this.numeroDos=0;
  }
}
