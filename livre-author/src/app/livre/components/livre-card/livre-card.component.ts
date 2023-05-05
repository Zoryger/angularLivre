import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Livre } from '../../models/livre';

@Component({
  selector: 'app-Livre-card',
  templateUrl: './Livre-card.component.html',
  styleUrls: ['./Livre-card.component.scss']
})
export class LivreCardComponent implements OnInit {

  @Input()
  selectedLivre!: Livre;
  @Output() received: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    if(this.selectedLivre){
      this.received.emit(true);
    }
  }

}
