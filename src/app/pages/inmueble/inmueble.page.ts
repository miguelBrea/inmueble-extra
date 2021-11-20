import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Property } from 'src/app/model/property';
import { InmoService } from 'src/app/services/inmo.service';

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.page.html',
  styleUrls: ['./inmueble.page.scss'],
})
export class InmueblePage implements OnInit {

  idPropiedad = null;
  propiedad: Property;

  constructor(private activateRoute: ActivatedRoute,
              public http: HttpClientModule,
              private inmo: InmoService) { }

  ngOnInit() {
    //aqui obtenemos el id de nuestro inmueble
    this.idPropiedad = this.activateRoute.snapshot.paramMap.get('id');
    //llamamos a nuestro servicio para obtener el objeto, retamos 1 al id
    this.propiedad = this.inmo.properties[this.idPropiedad-1];

  }


}
