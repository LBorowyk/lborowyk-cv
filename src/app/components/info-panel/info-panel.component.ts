import {Component, Input} from "@angular/core";
import {CVItem} from "../../models/cv.data.model";

@Component({
  selector: 'info-panel',
  templateUrl: 'info-panel.component.html',
  styleUrls: ['info-panel.component.scss', './../../app.component.scss']
})
export class InfoPanelComponent {
  @Input() item: CVItem;

}
