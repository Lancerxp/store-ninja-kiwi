import { Routes } from '@angular/router';
import { HomeComponent } from './services/pages/home/home.component'; // 👈 Importa el componente de inicio
import { ContactoComponent } from './services/pages/contacto/contacto.component'; // 👈 Importa el componente de contacto

export const routes: Routes = [
  { path: '', component: HomeComponent },           // 👈 Página principal
  { path: 'contacto', component: ContactoComponent }, // 👈 Contacto
];
