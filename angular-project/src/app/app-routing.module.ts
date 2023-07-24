import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./features/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop-cart', loadChildren: () => import('./features/shop-cart/shop-cart.module').then(m => m.ShopCartModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
