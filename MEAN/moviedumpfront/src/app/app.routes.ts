import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';

export const routes: Routes = [
    { path:'', component: InicioComponent },
    { path:'mis-productos', component: ProductosComponent }
];
