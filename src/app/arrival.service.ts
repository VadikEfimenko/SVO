import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrivalService {
  response: any;
  obj: any;

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
        return val.city;
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
