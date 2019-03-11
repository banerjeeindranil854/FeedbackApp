import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  private massage = () => {
    let subject = new Subject<any>();
    return {
      get: () => {
        return subject.asObservable();
      },
      send: (data: any) => {
        subject.next(data);
      }
    };
  };
  private loaderMsg = this.massage();
  private loader = () => {
    let loaderCount = 0;
    return {
      start: () => {
        loaderCount++;
        if (loaderCount > 0) {
          this.loaderMsg.send(true);
        }
      },
      stop: () => {
        loaderCount--;
        if (loaderCount <= 0) {
          this.loaderMsg.send(false);
        }
      },
      get: () => {
        return this.loaderMsg.get();
      }
    };
  };

  public Loader = this.loader();
}
