import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { UtilitariosComponent } from './shared/components/utilitarios/utilitarios.component';
import { ListaMoradorModule } from './lista-morador/lista-morador.module';
import { ListModule } from './features/moradores/models/list.module';
import { MoradoresPageComponent } from './moradores-page/moradores-page.component';
import { HomePageComponent } from './features/moradores/components/pages/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UtilitariosComponent,
    MoradoresPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListaMoradorModule,
    ListModule
  ],
  exports: [
    MoradoresPageComponent,
    HomePageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
