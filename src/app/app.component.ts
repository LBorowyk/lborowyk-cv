import { Component } from '@angular/core';
import {AppService} from "./app.service";
import {StudyPlace, WorkPlace} from "./models/cv.data.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lborowyk-cv';

  public getEducationDescription = (item: StudyPlace) => `(${item.degree})`
  public getWorkDescription = (item: WorkPlace) => item.rank;

  constructor(
    public dataService: AppService,
  ) {
  }
}
