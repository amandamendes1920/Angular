import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UtilitariosComponent } from './components/utilitarios/utilitarios.component';



const components = [
  HeaderComponent,
  FooterComponent,
  UtilitariosComponent
];


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ],
})
export class SharedModule { }
