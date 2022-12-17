import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigimonComponent } from './digimon/digimon.component';
import { MenuComponent } from './menu/menu.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { DigimonService } from './services/digimon.service';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { AyudaComponent } from './ayuda/ayuda.component';

@NgModule({
  declarations: [
    AppComponent,
    DigimonComponent,
    MenuComponent,
    PaginaNoEncontradaComponent,
    InicioComponent,
    FooterComponent,
    SliderComponent,
    AyudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DigimonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
