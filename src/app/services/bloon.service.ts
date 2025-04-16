import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Bloon {
  codigo: string;
  descripcion_del_codigo: string;
  precio: number;
  talla: string | null;
  color: string;
  cantidad: number;
  tipo_de_producto: string;
  imagen: string;
  fecha_ingreso: string;
}

@Injectable({
  providedIn: 'root'
})
export class BloonService {
  private apiUrl = 'http://localhost:3000/productos'; // Ruta al servidor JSON

  constructor(private http: HttpClient) {}

  getAll(): Observable<Bloon[]> {
    return this.http.get<Bloon[]>(this.apiUrl); // Solicitud GET para obtener todos los productos
  }

  getById(codigo: string): Observable<Bloon> {
    return this.http.get<Bloon>(`${this.apiUrl}/${codigo}`); // Solicitud GET para obtener un producto por código
  }

  create(bloon: Bloon): Observable<Bloon> {
    return this.http.post<Bloon>(this.apiUrl, bloon); // Solicitud POST para crear un nuevo producto
  }

  update(codigo: string, bloon: Bloon): Observable<Bloon> {
    return this.http.put<Bloon>(`${this.apiUrl}/${codigo}`, bloon); // Solicitud PUT para actualizar un producto
  }

  delete(codigo: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${codigo}`); // Solicitud DELETE para eliminar un producto
  }
}