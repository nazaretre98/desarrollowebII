
// src/app/services/products.service.ts
import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  name: string;
  price: number;
  descripcion: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Producto[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      descripcion: 'Description for Product 1',
      image: '/img/D-HP-CATEGORY-EYE-1600x2120_900x.jpg.webp'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      descripcion: 'Description for Product 2',
      image: '/img/IMG_5377_3d67bf85-9840-4200-95e1-8d6059c259a2.webp.jpeg'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      descripcion: 'Description for Product 3',
      image: '/img/STYLIZED-BOTF-FULL-MINI-LUMINIZER-GROUP.jpg.webp'
    }
  ];

  constructor() {}

  getProducts(): Producto[] {
    return this.products;
  }
}
