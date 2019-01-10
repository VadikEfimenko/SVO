import { Component } from '@angular/core';
import { ArrivalService } from './arrival.service';
import { HttpClient } from '@angular/common/http'
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appId: string = "89314f21";
  appKey: string = "414fe9eff2f3a95545eeb4470534a04b";
  tableObjectArray: any;
  response: any;

  constructor(private arrival: ArrivalService, private http: HttpClient) {}

  arrivalrace() {
    this.http.get('https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/SVO/arr/2019/1/9/18?appId=89314f21&appKey=414fe9eff2f3a95545eeb4470534a04b&utc=false&numHours=1&maxFlights=10')
    .subscribe((response)=>{
      this.response = response;
      this.tableObjectArray = this.arrival.getTableToInterface(this.response);
    })
  }

  departurerace() {
    this.http.get('https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/SVO/dep/2019/1/9/15?appId=89314f21&appKey=414fe9eff2f3a95545eeb4470534a04b&utc=false&numHours=1&maxFlights=10')
    .subscribe((response)=>{
      this.response = response;
      this.tableObjectArray = this.arrival.getTableToInterface(this.response);
    })
  }
  

}
