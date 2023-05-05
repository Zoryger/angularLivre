import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreDetailsComponent } from './pages/livre-details/livre-details.component';
import { LivreListComponent } from './pages/livre-list/livre-list.component';
import { LivreComponent } from './livre.component';

const routes: Routes = [
  {
    path: '',
    component: LivreListComponent
  },
  {
    path: ':id',
    component: LivreDetailsComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivreRoutingModule { }
