import { Injectable } from '@angular/core';

export interface Product {
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
  private products: Product[] = [
    {
      id: 1,
      name: 'Compacto',
      price: 100,
      descripcion: 'Descripción 1',
      image: '/img/Setting-Powder-Light-SKU.jpg.webp'
    },
    {
      id: 2,
      name: 'Lip oil',
      price: 200,
      descripcion: 'Descripción 2',
      image: '/img/soft-pinch-tinted-lip-oil-serenity-1440x1952.jpg.webp'
    },
    {
      id: 3,
      name: 'Blush',
      price: 200,
      descripcion: 'Descripción 2',
      image: '/img/soft-pinch-tinted-lip-oil-serenity-1440x1952.jpg.webp'
    },
    {
      id: 4,
      name: 'Rare',
      price: 200,
      descripcion: 'Descripción 2',
      image: '/img/soft-pinch-tinted-lip-oil-serenity-1440x1952.jpg.webp'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
