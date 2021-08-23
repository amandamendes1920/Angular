import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/moradores/components/pages/home-page/home-page.component';
import { MoradoresPageComponent } from './features/moradores/components/pages/moradores-page/moradores-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'moradores', component: MoradoresPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
