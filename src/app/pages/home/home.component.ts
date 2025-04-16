import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule para pipes
import { BloonService } from '../../services/bloon.service';

interface Bloon {
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

@Component({
  selector: 'app-home',
  standalone: true, // Usando componentes independientes
  imports: [CommonModule], // Importar CommonModule aquí para pipes
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos: Bloon[] = [];

  constructor(private bloonService: BloonService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.bloonService.getAll().subscribe({
      next: (data) => {
        this.productos = data;
        // Asegurar que todas las imágenes tengan URL completa
        this.productos.forEach(p => {
          if (!p.imagen.startsWith('http')) {
            p.imagen = this.getImageUrl(p.imagen);
          }
        });
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
      }
    });
  }

  private getImageUrl(path: string): string {
    // Si es una ruta local, convertirla a URL completa
    if (path.startsWith('assets/')) {
      return `${window.location.origin}/${path}`;
    }
    return `http://localhost:3000/${path.replace('public/', '')}`;
  }

  handleImageError(producto: Bloon): void {
    producto.imagen = `${window.location.origin}/assets/imgs/default-placeholder.png`;
  }

  verDetalle(codigo: string): void {
    console.log('Ver detalle del producto:', codigo);
    // Implementa tu lógica de navegación aquí
  }
}