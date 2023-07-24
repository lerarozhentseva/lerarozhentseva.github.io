import {NgModule} from '@angular/core';
import {CatalogComponent} from "./components/catalog/catalog.component";
import {CardComponent} from "./components/catalog/card/card.component";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {CoreModule} from "../../core/core.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    HomeRoutingModule,
    CoreModule, FormsModule, CommonModule
  ],
  declarations: [
    CatalogComponent,
    CardComponent, HomeComponent
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule {
}
