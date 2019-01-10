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
  templateGet = 'https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/SVO';
  Data = new Date();
  date =  this.Data.getFullYear() + '/' + (this.Data.getMonth() + 1) + '/' + 
  this.Data.getDate() + '/' + this.Data.getHours();

  constructor(private arrival: ArrivalService, private http: HttpClient) {}
  arrivalrace() {
    this.http.get( this.templateGet + '/arr/' + this.date + '?appId=' + this.appId + '&appKey=' + this.appKey + '&utc=true&numHours=1')
    .subscribe((response)=>{
      this.response = response;
      this.tableObjectArray = this.arrival.getTableToInterface(this.response);
    })
  }

  departurerace() {
    this.http.get( this.templateGet + '/dep/' + this.date + '?appId=' + this.appId + '&appKey=' + this.appKey + '&utc=true&numHours=1')
    .subscribe((response)=>{
      this.response = response;
      this.tableObjectArray = this.arrival.getTableToInterface(this.response);
    })
  }
  
  delayrace() {
    this.http.get( this.templateGet + '/arr/' + this.date + '?appId=' + this.appId + '&appKey=' + this.appKey + '&utc=true&numHours=1')
    .subscribe((response)=>{
      this.response = response;
      this.tableObjectArray = this.arrival.getTableDelayToInterface(this.response);
    })
  }

  searchDelay() {

  }
}
