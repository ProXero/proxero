import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record } from './model';

@Injectable()
export class DataReceiverService {

  constructor(private http: HttpClient){
      }
    
  getData(): Promise<Record[]>{
    return new Promise<Record[]>((resolve, reject) =>{
      this.http.get<Record[]>("/assets/data.json").subscribe(res =>{
        resolve(res);
      });
    });
  }
}
