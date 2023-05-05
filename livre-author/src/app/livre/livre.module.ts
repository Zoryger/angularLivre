import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreRoutingModule } from './livre-routing.module';
import { LivreComponent } from './livre.component';
import { LivreListComponent } from './pages/livre-list/livre-list.component';
import { LivreService } from './services/livre.service';
import { SharedModule } from '../shared/shared.module';
import { LivreFormComponent } from './components/livre-form/livre-form.component';
import { LivreDetailsComponent } from './pages/livre-details/livre-details.component';
import { LivreCardComponent } from './components/livre-card/livre-card.component';


@NgModule({
  declarations: [
    LivreComponent,
    LivreListComponent,
    LivreFormComponent,
    LivreDetailsComponent,
    LivreCardComponent
  ],
  imports: [
    CommonModule,
    LivreRoutingModule,
    SharedModule
  ],
  providers:[
    LivreService
  ],
})
export class LivreModule { }
