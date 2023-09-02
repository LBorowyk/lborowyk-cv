import {Component, ContentChild, Input} from "@angular/core";
import {HistoryPlace} from "../../../models/cv.data.model";
import {HistoryEventPanelTemplateDirective} from "./history-event-panel.template.directive";

@Component({
  selector: 'history-event-panel',
  templateUrl: 'history-event-panel.component.html',
  styleUrls: ['history-event-panel.component.scss']
})
export class HistoryEventPanelComponent{
  @Input() header: string;
  @Input() historyItems: Array<HistoryPlace>;
  @Input() getDescription: (item: HistoryPlace) => string = (_item) => "";

  @ContentChild(HistoryEventPanelTemplateDirective) historyItemTemplate: HistoryEventPanelTemplateDirective;

}
