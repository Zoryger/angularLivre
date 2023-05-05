import { LivreService } from '../../services/livre.service';
import { Livre } from '../../models/livre';
import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface LivreFormData {
  isCreateForm: boolean;
  Livre: Livre;
}

@Component({
  selector: 'app-Livre-form',
  templateUrl: './Livre-form.component.html',
  styleUrls: ['./Livre-form.component.scss']
})
export class LivreFormComponent implements OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();

  authors: string[] = [
    'Guy de Maupassant',
    'Victor Hugo'
  ];

  LivreForm = this.fb.group({
    id: [0, [Validators.required]],
    title: ['', [Validators.required]],
    author: ['', [Validators.required]],
    price: ['', [Validators.required]],
    publicationDate: ['', [Validators.email]]
  });

  constructor(public dialogRef: MatDialogRef<LivreFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LivreFormData, private fb: FormBuilder, 
    private LivreService : LivreService, private _snackBar: MatSnackBar) {

      if(!data.isCreateForm){
        this.setLivreForm(data.Livre);
      }

  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  setLivreForm(Livre: Livre) {
    this.LivreForm.setValue({
      id: Livre.id,
      title: Livre.title,
      author: Livre.author,
      price: Livre.price, 
      publicationDate: Livre.publicationDate
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
    if(this.LivreForm.valid){
      this.LivreForm.value.publicationDate = new Date(this.LivreForm.value.publicationDate || '').toISOString();
      if(this.data.isCreateForm){
        this.LivreForm.value.id = Date.now() + Math.random();
        this.LivreService.create(this.LivreForm.value as Livre)
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => {
          this._snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success']
          });

          this.dialogRef.close(true);
        });
      }else{
        this.LivreService.update(this.LivreForm.value as Livre)
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
