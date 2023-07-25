import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductResolver} from "./resolvers/product.resolver";
import {ShopCartComponent} from "./features/shop-cart/shop-cart.component";

// const routes: Routes = [
//   {path: '', component: HomeComponent},
//   {path: 'shop-cart', loadChildren: () => import('./features/shop-cart/shop-cart.module').then(m => m.ShopCartModule)},
// ];

const routes: Routes = [
  {
    path: '',
    resolve: {products: ProductResolver},
    children: [
      { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
    ]
  },
  { path: 'shop-cart', component: ShopCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductResolver]
})
export class AppRoutingModule {
}
