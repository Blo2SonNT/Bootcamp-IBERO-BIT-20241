import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioadminComponent } from './components/admin/inicioadmin/inicioadmin.component';
import { GestionPeliculasComponent } from './components/admin/gestion-peliculas/gestion-peliculas.component';

const tituloProyecto:string = "MovieDump"

export const routes: Routes = [
    { path:'', title: `Inicio | ${tituloProyecto}`, component: InicioComponent },
    { path: 'admin', title: `Administración ${tituloProyecto}`, component: InicioadminComponent},
    { path: 'admin/lista-peliculas', component: GestionPeliculasComponent}
];
