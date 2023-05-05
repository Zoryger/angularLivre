import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Livre } from '../../models/livre';
import { LivreService } from '../../services/livre.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-livre-details',
  templateUrl: './livre-details.component.html',
  styleUrls: ['./livre-details.component.scss']
})
export class LivreDetailsComponent implements OnInit {

  livreId!: number;
  livre$!: Observable<Livre>;

  constructor(private route: ActivatedRoute, private livreService: LivreService, private location: Location){
     route.params.subscribe(params => {
      this.livreId = params["id"];
     })
    
    }

    ngOnInit(): void {
      if(this.livreId){
        this.livre$ = this.livreService.getById(this.livreId);
      }
    }

    goBack(){
      this.location.back();
    }

    showReceivedValue(value: boolean){
      console.log(value);
    }
}
