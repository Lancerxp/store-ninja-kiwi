import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para *ngFor y pipes
import { FormsModule } from '@angular/forms'; // Importa FormsModule para [(ngModel)]
import { RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
import { BloonService, Bloon } from '../../services/bloon.service';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true, // Marca el componente como standalone
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule] // Agrega los módulos necesarios
})
export class HomeComponent implements OnInit {
  productosFiltrados: Bloon[] = [];
  terminoBusqueda = '';

  constructor(private productoService: BloonService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.getAll().subscribe((productos) => {
      this.productosFiltrados = productos;
    });
  }

  buscar(): void {
    const termino = this.terminoBusqueda.toLowerCase();
    this.productosFiltrados = this.productosFiltrados.filter(producto =>
      producto.descripcion_del_codigo.toLowerCase().includes(termino)
    );
  }

  agregarProducto(): void {
    console.log('Agregar producto');
  }

  verDetalle(id: string): void {
    console.log('Ver detalle del producto con ID:', id);
  }
}