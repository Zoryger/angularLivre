import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { LivreComponent } from './livre/livre.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    CommonModule,
    MatTableModule
  ],
  exports: [
    MatIconModule,
    LivreComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
