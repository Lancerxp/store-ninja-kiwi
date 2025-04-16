import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BloonService, Bloon } from '../../services/bloon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule]
})
export class HomeComponent implements OnInit {
  productos: Bloon[] = []; // Array original con todos los productos
  productosFiltrados: Bloon[] = []; // Array para los resultados filtrados
  terminoBusqueda = '';

  constructor(private productoService: BloonService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.getAll().subscribe((productos) => {
      this.productos = productos; // Guarda todos los productos en el array original
      this.productosFiltrados = productos; // Inicializa los productos filtrados con todos los productos
    });
  }

  buscar(): void {
    const termino = this.terminoBusqueda.toLowerCase();
    this.productosFiltrados = this.productos.filter(producto =>
      producto.descripcion_del_codigo.toLowerCase().includes(termino)
    );
  }

  resetBusqueda(): void {
    this.productosFiltrados = [...this.productos]; // Copia todos los productos al array filtrado
    this.terminoBusqueda = ''; // Limpia el término de búsqueda
  }

  agregarProducto(): void {
    console.log('Agregar producto');
  }

  verDetalle(id: string): void {
    console.log('Ver detalle del producto con ID:', id);
  }
}