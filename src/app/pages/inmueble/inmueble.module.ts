import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InmueblePageRoutingModule } from './inmueble-routing.module';

import { InmueblePage } from './inmueble.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InmueblePageRoutingModule
  ],
  declarations: [InmueblePage]
})
export class InmueblePageModule {}
