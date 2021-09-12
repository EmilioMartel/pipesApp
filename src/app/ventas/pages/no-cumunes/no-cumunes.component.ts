import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-cumunes',
  templateUrl: './no-cumunes.component.html',
  styles: [
  ]
})
export class NoCumunesComponent {


  // i18nSelect
  nombre: string = 'Emilio';
  genero: string = 'masculino';
 
  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }

  cambiarGenero(){
    if(this.genero === 'masculino'){
      this.nombre = 'Sara';
      this.genero = 'femenino';
    }else{
      this.nombre = 'Emilio';
      this.genero = 'masculino';
    }
  }

  //i18nPlural
  clientes: string[] = ['emilio', 'Fernando', 'Susana', 'CR7', 'Maria'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  eliminarCliente(){
    this.clientes.pop();
  }


  //KeyValue Pipe
  persona = {
    nombre: 'fernando',
    edad: 35,
    direccion: 'Madrid, España'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() =>{
      resolve ('Tenemos data de promesa')
    },3500);
    
  });

}
