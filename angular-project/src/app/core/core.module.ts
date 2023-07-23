import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    RouterLink
  ],
  exports: [
    HeaderComponent,
    ButtonComponent
  ],
})
export class CoreModule { }
