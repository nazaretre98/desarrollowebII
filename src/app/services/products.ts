import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  mostrarMas?: boolean; // Para alternar detalles
  detalles?: string;    // Detalle específico por producto
}

@Injectable({
  providedIn: 'root'
})
export class Products {
  private products: Product[] = [
    {
      id: 1,
      nombre: 'Positive Light Liquid Luminizer',
      descripcion: 'No. Exhilarate',
      precio: 665,
      imagen: '/img/ECOMM-MINI-POSITIVE-LIGHT-LIQUID-LUMINZER-MESMERIZE-PRODUCT-BOX.jpg.webp',
      detalles: 'Good news—our fan-fave liquid highlighter fam is growing, with two NEW shades: Exhilarate (champagne gold) and Reveal (copper).  Create an instantly dewy, buildable glow while nourishing skin so it looks on the bright side all day.'
    },
    {
      id: 2,
      nombre: 'Soft Pinch Luminous Powder Blush',
      descripcion: 'No. Cheer',
      precio: 665,
      imagen: '/img/ECOMM-SOFT-PINCH-LUMINOUS-POWDER-BLUSH-CHEER_720x.jpg.webp',
      detalles: 'A radiant blush that lights up all skin tones with airy, seamless, and silky color to keep you beaming all day.'
    },
    {
      id: 3,
      nombre: 'Always an Optimist Soft Radiance Setting Powder',
      descripcion: 'No. Light',
      precio: 615,
      imagen: '/img/Setting-Powder-Light-SKU.jpg.webp',
      detalles: 'A silky, do-it-all setting powder to smooth, blur, and control shine for a soft natural finish and all-day comfort.'
    },
    {
      id: 4,
      nombre: 'Always an Optimist Pore Diffusing Primer',
      descripcion: 'No. Face',
      precio: 685,
      imagen: '/img/Pore-Primer-Travel-SKU.jpg.webp',
      detalles: 'A cushiony gel primer that smooths away the look of pores and fine lines, boosts and extends makeup wear, and actually hydrates skin while fighting shine all day.'
    },
    {
      id: 5,
      nombre: 'Perfect Strokes Universal Volumizing Mascara',
      descripcion: 'No. Black',
      precio: 540,
      imagen: '/img/brow-harmony-flexible-lifting-gel-1440x1952.jpg.webp',
      detalles: 'Created for every lash type, this all-in-one mascara pairs a weightless, easy-to-build formula with a universal eye-hugging brush to lift, lengthen, curl, and volumize every lash from every angle.'
    },
    {
      id: 6,
      nombre: 'Soft Pinch Liquid Blush Mini',
      descripcion: 'No. Charm',
      precio: 370,
      imagen: '/img/ECOMM-BOTF-SP-MINI-CHEEK-LIP-SET-BOX-PRODUCT-BOX.jpg.webp',
      detalles: 'A weightless, long-lasting mini liquid blush that blends and builds beautifully for a soft, healthy flush.'
    },
    {
      id: 7,
      nombre: 'Soft Pinch Tinted Lip Oil',
      descripcion: 'No. Serenity',
      precio: 540,
      imagen: '/img/soft-pinch-tinted-lip-oil-serenity-1440x1952.jpg.webp',
      detalles: 'An innovative lip jelly that transforms into a lightweight oil. Starts off glossy, then leaves lips tinted while gently plumping and staying comfortable—never sticky—all day.'
    },
    {
      id: 8,
      nombre: 'Soft Pinch Liquid Blush',
      descripcion: 'No. Grateful',
      precio: 615,
      imagen: '/img/ECOMM-MINI-SP-LIQUID-BLUSH-CHARM-PRODUCT-BOX.jpg.webp',
      detalles: 'A viral bestseller for a reason. This weightless liquid blush delivers high-impact color with just one dot, blending seamlessly for a pinch-perfect flush that lasts up to 12 hours.'
    }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
