import {Directive, TemplateRef} from "@angular/core";
@Directive({selector: '[historyEventItem]'})
export class HistoryEventPanelTemplateDirective {

  constructor(
    public template: TemplateRef<any>
  )
  {

  }

}
