import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // necesario si usas *ngFor en standalone
import { Producto } from '../../services/products.service'; // importa la interfaz
import { ProductsService } from '../../services/products.service'; // importa el servicio

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule], // incluye CommonModule si usas directivas como *ngFor
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Producto[] = [];

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getProducts();
  }
}
