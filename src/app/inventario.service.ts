import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { Inventario, InventarioCreacion } from './inventario.models';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor() { }

  private http = inject(HttpClient);
    private URLbase = environment.apiURL + '/api/inventario';
  
    public obtenerTodos(): Observable<Inventario[]>{
      return this.http.get<Inventario[]>(this.URLbase);
    }
  
    public obtenerPorId(id: number): Observable<Inventario>{
      return this.http.get<Inventario>(`${this.URLbase}/${id}`);
    }
  
    public crear(inventario: InventarioCreacion){
      return this.http.post(this.URLbase, inventario);
    }
  
    public actualizar(id: number, inventario: InventarioCreacion){
      return this.http.put(`${this.URLbase}/${id}`, inventario);
    }
  
    public borrar(id: number){
      return this.http.delete(`${this.URLbase}/${id}`);
    }
}
