import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Livre } from '../../models/livre';
import { LivreService } from '../../services/livre.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-Livre-details',
  templateUrl: './Livre-details.component.html',
  styleUrls: ['./Livre-details.component.scss']
})
export class LivreDetailsComponent implements OnInit {

  LivreId!: number;
  Livre$!: Observable<Livre>;

  constructor(private route: ActivatedRoute, private LivreService: LivreService, private location: Location){
     route.params.subscribe(params => {
      this.LivreId = params["id"];
     })
    
    }

    ngOnInit(): void {
      if(this.LivreId){
        this.Livre$ = this.LivreService.getById(this.LivreId);
      }
    }

    goBack(){
      this.location.back();
    }

    showReceivedValue(value: boolean){
      console.log(value);
    }
}
