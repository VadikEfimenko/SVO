import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { ArrivalService } from './arrival.service';
import { LeftAreaComponent } from './left-area/left-area.component';
import { RightAreaComponent } from './right-area/right-area.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftAreaComponent,
    RightAreaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ArrivalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
