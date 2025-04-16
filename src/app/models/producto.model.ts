export interface Producto {
  codigo: string; // Código del producto
  descripcion_del_codigo: string; // Descripción del producto
  precio: number; // Precio del producto
  talla?: string; // Talla del producto (opcional)
  color: string; // Color del producto
  cantidad: number; // Cantidad disponible
  tipo_de_producto: string; // Tipo de producto
  imagen?: string; // URL de la imagen (opcional)
  fechaIngreso?: Date; // Fecha de ingreso (opcional)
}