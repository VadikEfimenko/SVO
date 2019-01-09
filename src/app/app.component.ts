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
  response: any;
  flightNumber: string;
  flightCarrier: string;
  cityFrom: string;
  cityTo: string;
  timeArrival: string;
  timeDeparture: string;

  tableObjectArray: any;

  constructor(private http: HttpClient) {

  }
  arrivalrace() {
    this.http.get('https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/SVO/arr/2019/1/9/18?appId=89314f21&appKey=414fe9eff2f3a95545eeb4470534a04b&utc=false&numHours=1&maxFlights=10')
    .subscribe((response)=>{
      this.response = response;

      this.tableObjectArray = this.getTableToInterface(this.response);
      console.log(this.response);
    })
  }
  getTableToInterface(res : any) : any {    
    let tableMain = []; 
    let tableAir : {[k: string]: string}

    for (let val of res.flightStatuses) {  
      tableAir = {}; 
      tableAir.flightNumber = val.carrierFsCode + 
                              val.flightNumber;
      
      tableAir.flightCarrier = this.getCompanies(res.appendix.airlines,
                                                 val.carrierFsCode);
      tableAir.cityFrom = this.getCity(res.appendix.airports,
                                       val.departureAirportFsCode);
      tableAir.cityTo = this.getCity(res.appendix.airports, 
                                     val.arrivalAirportFsCode);
      tableAir.timeArrival = this.getTime(val.arrivalDate.dateUtc);

      tableAir.timeDeparture = this.getTime(val.departureDate.dateUtc);
    
      tableMain.push(tableAir);
    }
    return tableMain;
  } 
  getCompanies(airlines: any, race: string) : string {
    for (let val of airlines) {
      if (val.fs == race) {
        return val.name;
      }
    }
    return "-"; 
  }
  getCity(airports: any, airport: string) : string {
    for (let val of airports) {
      if (val.fs == airport) {
        return val.name;
      }
    }
    return "-";
  }
  getTime(timeUTC: string) : string {
    let time = new Date(timeUTC);
    let hour : string = time.getUTCHours() + "";
    let minutes : string = time.getUTCMinutes() + "";
    hour = hour.length == 1 ? "0" + hour : hour;
    minutes = minutes.length == 1 ? "0" + minutes : minutes;
    
    return hour + ':' + minutes;
  }

}
