export interface InventarioCreacion {
    nombre: string;
    descripcion: string;
    categoria: string[];
    unidadDeMedida: string[];
    cantidadActual: number;
    cantidadMinima: number;
    cantidadMaxima: number;
    costoUnitario: number;
    precioVenta: number;
    fechaIngreso: Date;
    fechaCaducidad: Date;
    proveedor: string;
    ubicacionAlmacen?: string;
    estado: string[];
    notas?: string;

}

export interface Inventario {
    id: number;
    nombre: string;
    descripcion: string;
    categoria: string[];
    unidadDeMedida: string[];
    cantidadActual: number;
    cantidadMinima: number;
    cantidadMaxima: number;
    costoUnitario: number;
    precioVenta: number;
    fechaIngreso: Date;
    fechaCaducidad: Date;
    proveedor: string;
    ubicacionAlmacen?: string;
    estado: string[];
    notas?: string;
}