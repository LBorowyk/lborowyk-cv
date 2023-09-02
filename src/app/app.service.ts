import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {CVItem} from "./models/cv.data.model";

@Injectable()
export class AppService {

  private readonly dataSubject: Subject<CVItem> = new Subject<CVItem>();

  constructor(
    private http: HttpClient,
  ) {
    this.http.get<CVItem>('assets/json/data.json').subscribe(data => this.setItem(data));
  }

  public get item() : Observable<CVItem> {
    return this.dataSubject;
  }

  private setItem(data: CVItem) {
    this.dataSubject.next(data);
  }
}
