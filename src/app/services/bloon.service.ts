import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Bloon {
  _id?: string;
  codigo: string;
  descripcion_del_codigo: string;
  precio: number;
  talla: string;
  color: string;
  cantidad: number;
  tipo_de_producto: string;
  imagen: string;
  fechaIngreso?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class BloonService {
  private apiUrl = 'http://localhost:3000/api/bloonstd';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Bloon[]> {
    return this.http.get<Bloon[]>(this.apiUrl);
  }

  getById(id: string): Observable<Bloon> {
    return this.http.get<Bloon>(`${this.apiUrl}/${id}`);
  }

  // (Opcional si quieres añadir más funcionalidades)
  create(bloon: Bloon): Observable<Bloon> {
    return this.http.post<Bloon>(this.apiUrl, bloon);
  }

  update(id: string, bloon: Bloon): Observable<Bloon> {
    return this.http.put<Bloon>(`${this.apiUrl}/${id}`, bloon);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

