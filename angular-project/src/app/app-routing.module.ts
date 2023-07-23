import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {ShopCartComponent} from "./features/shop-cart/shop-cart.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shopping-cart', component: ShopCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
