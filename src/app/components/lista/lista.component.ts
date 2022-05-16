import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

listaAlumnos = [{ nombre: 'Sol', apellido: 'vaccaro', edad: 28, curso: 'Angular',nota:7, tienePc: 'Si' }, { nombre: 'Rodrigo', apellido: 'Perez', edad: 28, curso: 'Vue',nota:10,tienePc:'No' }, { nombre: 'Santi ', apellido: 'Requelme', edad: 32, curso: 'React',nota:4,tienePc:'Si' },{nombre:'Antonio', apellido:'Franco', edad:29,curso:'Python',nota:10,tienePc:'No'},{nombre:'Giovanna', apellido:'Fucenecco', edad:24 ,curso:'Desarrollo Web',nota:3,tienePc:'Si'}]

  constructor() { }

  ngOnInit(): void {

  }

}
