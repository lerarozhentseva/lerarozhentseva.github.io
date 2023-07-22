import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent
  ],
  imports: [],
  exports: [
    HeaderComponent,
    ButtonComponent
  ],
})
export class CoreModule { }
