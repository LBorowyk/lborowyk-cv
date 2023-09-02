import {NgModule} from "@angular/core";
import {HistoryEventPanelTemplateDirective} from "./history-event-panel/history-event-panel.template.directive";
import {HistoryEventPanelComponent} from "./history-event-panel/history-event-panel.component";
import {SectionPanelComponent} from "./section-panel/section-panel.component";
import {SectionPanelTemplateDirective} from "./section-panel/section-panel.template.directive";
import {CommonModule} from "@angular/common";
import {CompanyNameComponent} from "./company-name/company-name.component";

const declarationsAndExports = [
  HistoryEventPanelTemplateDirective,
  HistoryEventPanelComponent,
  SectionPanelComponent,
  SectionPanelTemplateDirective,
  CompanyNameComponent,

]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...declarationsAndExports],
  exports: [...declarationsAndExports],

})
export class CommonPanelModule {

}
