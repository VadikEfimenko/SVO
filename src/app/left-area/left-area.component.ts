import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-area',
  templateUrl: './left-area.component.html',
  styleUrls: ['./left-area.component.css']
})
export class LeftAreaComponent implements OnInit {
  @Input() race: string;
  @Output() arrivalrace = new EventEmitter();
  @Output() departurerace = new EventEmitter();
  @Output() delayrace = new EventEmitter(); 
  @Output() searchRace = new EventEmitter();
  constructor() { }

  onArrivalRace() {
    this.arrivalrace.emit();
  }

  onDepartureRace() {
    this.departurerace.emit();
  }

  onDelayRace() {
    this.delayrace.emit();
  }

  onSearchRace() {
    this.searchRace.emit(this.race);
  }
}
