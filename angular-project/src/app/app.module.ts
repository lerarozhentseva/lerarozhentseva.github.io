import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {HomeModule} from "./features/home/home.module";
import {ShopCartModule} from "./features/shop-cart/shop-cart.module";
import {FormsModule} from "@angular/forms";
import {CounterService} from "./services/counter.service";
import {HttpClientModule} from "@angular/common/http";
import {GetItemsService} from "./services/get-items.service";
import {ShopCartService} from "./services/shop-cart.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule, HomeModule, ShopCartModule, FormsModule, HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [CounterService, GetItemsService, ShopCartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
