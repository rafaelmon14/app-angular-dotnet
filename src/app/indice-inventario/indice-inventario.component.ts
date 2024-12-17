import { Component, inject } from '@angular/core';
import { Inventario } from '../inventario.models';
import { InventarioService } from '../inventario.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-indice-inventario',
  imports: [MatButtonModule, RouterLink, MatTableModule,  CommonModule,],
  templateUrl: './indice-inventario.component.html',
  styleUrl: './indice-inventario.component.css'
})
export class IndiceInventarioComponent {
  inventarioService = inject(InventarioService);
    inventarios?: Inventario[];
    columnasAMostrar = ['nombre', 'acciones']
  
    constructor(){
      this.cargarProductos();
    }
  
    cargarProductos(){
      this.inventarioService.obtenerTodos().subscribe(inventarios => {
        this.inventarios = inventarios;
      });
    }
  
    borrar(id: number){
      this.inventarioService.borrar(id).subscribe(()=>{
        this.cargarProductos();
      });
    }  

}
