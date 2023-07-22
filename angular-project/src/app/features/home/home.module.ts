import { NgModule } from '@angular/core';
import {CatalogComponent} from "./components/catalog/catalog.component";
import {CardComponent} from "./components/catalog/card/card.component";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {CoreModule} from "../../core/core.module";

@NgModule({
  imports: [
    HomeRoutingModule,
    BrowserModule,
    CoreModule
  ],
  declarations: [
    CatalogComponent,
    CardComponent, HomeComponent
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
