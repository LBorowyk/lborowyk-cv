import {Component, ContentChild, Input, ViewEncapsulation} from "@angular/core";
import {SectionPanelTemplateDirective} from "./section-panel.template.directive";

@Component({
  selector: 'section-panel',
  templateUrl: 'section-panel.component.html',
  styleUrls: ['section-panel.component.scss', './../../../app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SectionPanelComponent {

  @Input() header: string;
  @ContentChild(SectionPanelTemplateDirective) sectionContentTemplate: SectionPanelTemplateDirective;

}
