import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaComponent } from './reserva/reserva.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { PreciosComponent } from './precios/precios.component';
import { MenuComponent } from './menu/menu.component';
import { ContactosComponent } from './contactos/contactos.component';
import { AboutComponent } from './about/about.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PiesComponent } from './pies/pies.component';
import { RegistroComponent } from './registro/registro.component';
import { AdminComponent } from './admin/admin.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'reserva', component: ReservaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'pies', component: PiesComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'loginadmin', component: LoginadminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routedComponents: any[] = [
//     LoginComponent,
//   ]
