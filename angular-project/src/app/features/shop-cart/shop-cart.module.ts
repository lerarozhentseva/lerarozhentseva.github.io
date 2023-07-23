import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {CoreModule} from "../../core/core.module";
import {ShopCartComponent} from "./shop-cart.component";
import {CartItemComponent} from "./components/cart-item/cart-item.component";

@NgModule({
  imports: [
    BrowserModule,
    CoreModule
  ],
  declarations: [
    ShopCartComponent, CartItemComponent
  ],
  exports: [
    ShopCartComponent
  ],
})
export class ShopCartModule { }
