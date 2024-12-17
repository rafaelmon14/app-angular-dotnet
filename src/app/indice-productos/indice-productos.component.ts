import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop.models';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-indice-productos',
  imports: [MatButtonModule, RouterLink, MatTableModule,  CommonModule, ],
  templateUrl: './indice-productos.component.html',
  styleUrl: './indice-productos.component.css'
})
export class IndiceProductosComponent {
  laptopService = inject(LaptopService);
  laptops?: Laptop[];
  columnasAMostrar = ['nombre', 'acciones']

  constructor(){
    this.cargarProductos();
  }

  cargarProductos(){
    this.laptopService.obtenerTodos().subscribe(laptops => {
      this.laptops = laptops;
    });
  }

  borrar(id: number){
    this.laptopService.borrar(id).subscribe(()=>{
      this.cargarProductos();
    });
  }
}
