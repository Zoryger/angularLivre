import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { GenericPopupComponent } from 'src/app/shared/components/generic-popup/generic-popup.component';
import { LivreFormComponent } from '../../components/livre-form/livre-form.component';
import { Livre } from '../../models/livre';
import { LivreService } from '../../services/livre.service';

@Component({
  selector: 'app-Livre-list',
  templateUrl: './livre-list.component.html',
  styleUrls: ['./livre-list.component.sass']
})
  
export class LivreListComponent implements OnInit, OnDestroy{

  private destroy$: Subject<boolean> = new Subject<boolean>();

  Livres$: Observable<Livre[]>;

  displayedColumns: string[] = ['firstName', 'lastName', 'class', 'email', 'update', 'delete'];
  
  constructor(private LivreService: LivreService, private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router){}
  
  openLivreForm(Livre?: Livre) {
    const dialogRef = this.dialog.open(LivreFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: Livre ? false : true,
        Livre: Livre ? Livre : undefined
      }
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.fetchData();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  
   ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.Livres$ = this.LivreService.get();
  }
  
  delete(id: number) {
    const ref = this.dialog.open(GenericPopupComponent, {
      data: {
        title: 'Confirmation de suppression',
        message: 'êtes-vous sûr de vouloir supprimer cet étudiant ?',
        typeMessage: 'none',
        yesButtonVisible: true,
        noButtonVisible: true,
        cancelButtonVisible: false,
        defaultButton: 'No',
        yesButtonLabel: 'Oui',
        noButtonLabel: 'Non',
      },
    })

    ref.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.LivreService.delete(id)
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
              this._snackBar.open(result, '', {
                duration: 2000,
                panelClass: ['bg-success']
              });
              this.fetchData();
            });
        }
      });
  }

  showLivreDetails(LivreId : number){
   this.router.navigate(['/Livres/' + LivreId]);
  }






}