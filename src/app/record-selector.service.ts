import { Injectable } from '@angular/core';
import { Record } from './model';
import { DataReceiverService } from './data-receiver.service';
import { Promise } from 'q';

import * as moment from 'moment';

@Injectable()
export class RecordSelectorService {

  constructor(private dataReceiver: DataReceiverService) { }

  GetRecord(records: Record[], date: Date): Record{
    var randRecs = [];
    for(var i=0; i<records.length; i++){
      var recDate = records[i].date;
      if(recDate){
        if(moment(recDate).isSame(moment(date), 'day')){
          return records[i];
        }
        else if (records[i].endDate && moment(date).isBetween(moment(recDate), moment(records[i].endDate), 'day', '[]') ){
          return records[i];
        }
      }
      else{
        randRecs.push(records[i]);
      }
    }
    return this.getRandom(randRecs, date);
  }

  getRandom(recs: Record[], date: Date){
    
    var dayDiff = moment(date).diff(moment('2017-12-20'), 'days');
    var index = dayDiff % recs.length;
    var cycleNumber = Math.floor(dayDiff / recs.length);
   
    (Math as any).seedrandom(cycleNumber);

    this.shuffle(recs);

    // for(var i = 0; i< recs.length; i++){
    //   console.log(recs[i].text);
    // }

    return recs[index];
  }

  shuffle(a: Record[]) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
  }
}
