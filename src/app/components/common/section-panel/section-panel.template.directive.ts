import {Directive, TemplateRef} from "@angular/core";

@Directive({selector: '[sectionPanelContent]'})
export class SectionPanelTemplateDirective {
  constructor(public template: TemplateRef<any>)
  {

  }
}
