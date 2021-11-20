import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from '../model/property';
import { InmoService } from '../services/inmo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  tipoPrecio: number; // 0-todos 1-baratos 2-de lujo
  rangoMin: number;
  rangoMax: number;

  constructor(public inmoService: InmoService,
              private router: Router) {}

  ngOnInit(){
    this.tipoPrecio = 0; //por defecto se muestra todos los tipos
    this.rangoMin = 40;
    this.rangoMax = 1000;
  }

  verTipo(tipo: number){
    this.tipoPrecio = tipo;
  }

  //Este metodo se usa para navegar al lugar del inmueble seleccionado por su id
  goInmueble(casa: Property){
    this.router.navigate(['inmueble', casa]);
  }

}
