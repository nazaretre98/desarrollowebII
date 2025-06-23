import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, Products as ProductsService } from '../../services/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Productos {
  productos: Product[] = [];

  constructor(private productsService: ProductsService) {
    this.productos = this.productsService.getProducts();
  }

  toggleMostrarMas(producto: Product): void {
    producto.mostrarMas = !producto.mostrarMas;
  }
}
