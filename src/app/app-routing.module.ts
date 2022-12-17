import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonComponent } from './digimon/digimon.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  { path: 'digimons', component: DigimonComponent },
  { path: '', component: InicioComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
