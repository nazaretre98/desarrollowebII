import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products', () => {
    const productos = service.getProducts();
    expect(productos.length).toBeGreaterThan(0);
  });

  it('should return product with expected structure', () => {
    const producto = service.getProducts()[0];
    expect(producto).toEqual(jasmine.objectContaining({
      id: jasmine.any(Number),
      name: jasmine.any(String),
      descripcion: jasmine.any(String),
      price: jasmine.any(Number),
      image: jasmine.any(String)
    }));
  });
});
