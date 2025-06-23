import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   // IMPORTANTE para *ngFor, *ngIf
import { ProductsService, Product } from '../../services/products';

@Component({
  selector: 'app-products',
  standalone: true,           // <- importante si quieres importar CommonModule aquí
  imports: [CommonModule],    // <- aquí importas CommonModule
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent implements OnInit {
  productos: Product[] = [];
  productoSeleccionado: Product | null = null;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productos = this.productService.getProducts();
  }

  abrirModal(producto: Product): void {
    this.productoSeleccionado = producto;
  }

  cerrarModal(): void {
    this.productoSeleccionado = null;
  }
}
