import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ProductsComponent } from './pages/products/products';  // o products.component si cambias
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'nosotros', component: About },
  { path: 'productos', component: ProductsComponent },
  { path: 'contacto', component: Contact },  // <-- Asegúrate que aquí hay coma si hay más rutas abajo
  { path: '**', redirectTo: '' }
];
