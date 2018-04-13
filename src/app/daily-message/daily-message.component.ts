import { Component, OnInit } from '@angular/core';
import { Record } from '../model';
import { RecordSelectorService } from '../record-selector.service';
import { DataReceiverService } from '../data-receiver.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'daily-message',
  templateUrl: './daily-message.component.html',
  styleUrls: ['./daily-message.component.css']
})
export class DailyMessageComponent implements OnInit {

  textOfDay: string;
  textDetails: string;
  selectedDate: Date;
  maxDate: Date;

  constructor(private recordSelector: RecordSelectorService,
    private dataReceiver: DataReceiverService){
  }

  ngOnInit(): void {
    this.selectedDate = new Date();
    this.maxDate = new Date();
    this.getData();
  }

  getData(): void{
    this.dataReceiver.getData().then(res =>{
      var rec = this.recordSelector.GetRecord(res, this.selectedDate);
      this.textOfDay = rec.text;
      this.textDetails = rec.details || "";
      var img = window.document.getElementById("img");
      var bgImg = window.document.getElementById("bgDiv");
      if(rec.image)
        (img as any).src = "/assets/" + rec.image;
      else
        (img as any).src = "";

      if(rec.bg)
        (bgImg as any).style.backgroundImage = "url(/assets/" + rec.bg + ")";
      console.log(rec.date);
    });
  }

  changeDate(event: MatDatepickerInputEvent<Date>) {
    if(event.value <= this.maxDate){
      this.selectedDate = event.value;
      this.getData();
    }
  }
}
