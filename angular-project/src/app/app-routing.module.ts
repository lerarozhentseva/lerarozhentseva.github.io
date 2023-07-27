import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductResolver} from "./resolvers/product.resolver";

const routes: Routes = [
  {
    path: '',
    resolve: {products: ProductResolver},
    children: [
      { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), data: { animation: 'slideInAnimation' } },
    ]
  },
  { path: 'shop-cart', loadChildren: () => import('./features/shop-cart/shop-cart.module').then(m => m.ShopCartModule), data: { animation: 'slideInAnimation' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductResolver]
})
export class AppRoutingModule {
}
