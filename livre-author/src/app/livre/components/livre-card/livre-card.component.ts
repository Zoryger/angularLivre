import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Livre } from '../../models/livre';

@Component({
  selector: 'app-livre-card',
  templateUrl: './livre-card.component.html',
  styleUrls: ['./livre-card.component.scss']
})
export class LivreCardComponent implements OnInit {

  @Input()
  selectedLivre: Livre | undefined;
  @Output() received: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    if(this.selectedLivre){
      this.received.emit(true);
    }
  }

}
