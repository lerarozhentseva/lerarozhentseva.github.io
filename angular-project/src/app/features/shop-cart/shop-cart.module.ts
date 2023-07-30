import {NgModule} from '@angular/core';
import {CoreModule} from "../../core/core.module";
import {ShopCartComponent} from "./shop-cart.component";
import {CartItemComponent} from "./components/cart-item/cart-item.component";
import {FormsModule} from "@angular/forms";
import {ShopCartRoutingModule} from "./shop-cart-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CoreModule, FormsModule, ShopCartRoutingModule, CommonModule
  ],
  declarations: [
    ShopCartComponent, CartItemComponent
  ],
  exports: [
    ShopCartComponent
  ],
})
export class ShopCartModule {
}
