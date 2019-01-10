import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-area',
  templateUrl: './left-area.component.html',
  styleUrls: ['./left-area.component.css']
})
export class LeftAreaComponent implements OnInit {
  @Output() arrivalrace = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }

  onArrivalRace() {
    this.arrivalrace.emit();
  }

}