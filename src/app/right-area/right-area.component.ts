import { Component, OnInit, Import, Input } from '@angular/core';

@Component({
  selector: 'app-right-area',
  templateUrl: './right-area.component.html',
  styleUrls: ['./right-area.component.css']
})
export class RightAreaComponent implements OnInit {
  @Input() response: any;
  @Input() tableObjectArray: any;

  Data = new Date();
  dateWellFrom = this.Data.getHours() + ":00" + " " + this.Data.getDate() + "." + 
  + this.Data.getMonth() + 1 + "." + this.Data.getFullYear();  
  dateWellTo = this.Data.getHours() + 1 + ":00" + " " + this.Data.getDate() + "." + 
  + this.Data.getMonth() + 1 + "." + this.Data.getFullYear();

}
