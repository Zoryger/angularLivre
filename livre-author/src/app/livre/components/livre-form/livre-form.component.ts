import { LivreService } from '../../services/livre.service';
import { Livre } from '../../models/livre';
import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface LivreFormData {
  isCreateForm: boolean;
  livre: Livre;
}

@Component({
  selector: 'app-livre-form',
  templateUrl: './livre-form.component.html',
  styleUrls: ['./livre-form.component.scss']
})
export class LivreFormComponent implements OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();

  authors: string[] = [
    'Guy de Maupassant',
    'Victor Hugo'
  ];

  livreForm = this.fb.group({
    id: [0, [Validators.required]],
    title: ['', [Validators.required]],
    author: ['', [Validators.required]],
    price: [0, [Validators.required]],
    publicationDate: ['', [Validators.email]]
  });

  constructor(public dialogRef: MatDialogRef<LivreFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LivreFormData, private fb: FormBuilder, 
    private livreService : LivreService, private _snackBar: MatSnackBar) {

      if(!data.isCreateForm){
        this.setLivreForm(data.livre);
      }

  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  setLivreForm(livre: Livre) {
    this.livreForm.setValue({
      id: livre.id,
      title: livre.title,
      author: livre.author,
      price: livre.price, 
      publicationDate: livre.publicationDate
    });
  }

  get title(){
    if(this.data.isCreateForm){
      return 'Formulaire de création';
    }
    return 'Formulaire de modification';
  }

  get submitBtnName(){
    if(this.data.isCreateForm){
      return 'Ajouter';
    }
    return 'Modifier';
  }

  onSubmit(){
    if(this.livreForm.valid){
      this.livreForm.value.publicationDate = new Date(this.livreForm.value.publicationDate || '').toISOString();
      if(this.data.isCreateForm){
        this.livreForm.value.id = Date.now() + Math.random();
        this.livreService.create(this.livreForm.value as Livre)
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => {
          this._snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success']
          });

          this.dialogRef.close(true);
        });
      }else{
        this.livreService.update(this.livreForm.value as Livre)
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => {
          this._snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success']
          });
          this.dialogRef.close(true);
        });
      }
    }
  }
}
