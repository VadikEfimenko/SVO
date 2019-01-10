import { Component, OnInit, Import, Input } from '@angular/core';

@Component({
  selector: 'app-right-area',
  templateUrl: './right-area.component.html',
  styleUrls: ['./right-area.component.css']
})
export class RightAreaComponent implements OnInit {
  @Input() response: any;
  @Input() tableObjectArray: any;


}
