import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { IndiceProductosComponent } from './indice-productos/indice-productos.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { IndiceInventarioComponent } from './indice-inventario/indice-inventario.component';

export const routes: Routes = [
    {path: '', component: IndiceInventarioComponent},
    // {path: 'productos', component: IndiceProductosComponent},
    // {path: 'productos/crear', component: CrearProductoComponent},
    // {path: 'productos/editar/:id', component: EditarProductoComponent},
    {path: 'stock', component: IndiceProductosComponent},
    {path: 'stock/crear', component: CrearProductoComponent},
    {path: 'stock/editar/:id', component: EditarProductoComponent},
];
