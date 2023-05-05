import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table'; 
import {MatDialogModule} from '@angular/material/dialog';
import { GenericPopupComponent } from './components/generic-popup/generic-popup.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input'
@NgModule({
  declarations: [GenericPopupComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule


  ],
  exports:[
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    GenericPopupComponent,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    MatNativeDateModule,
    MatInputModule
  ]
})
export class SharedModule { }