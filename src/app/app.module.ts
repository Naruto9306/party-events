import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'; // routedComponents
import { AppComponent } from './app.component';
import { ReservaComponent } from './reserva/reserva.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PreciosComponent } from './precios/precios.component';
import { ContactosComponent } from './contactos/contactos.component';
import { PiesComponent } from './pies/pies.component';
import { RegistroComponent } from './registro/registro.component';
import { AdminComponent } from './admin/admin.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { dataService } from './servicioDatos/globos.service';

@NgModule({
  declarations: [
    AppComponent,
    ReservaComponent,
    LoginComponent,
    MenuComponent,
    InicioComponent,
    AboutComponent,
    ServiciosComponent,
    PreciosComponent,
    ContactosComponent,
    PiesComponent,
    RegistroComponent,
    AdminComponent,
    LoginadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    // routedComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
