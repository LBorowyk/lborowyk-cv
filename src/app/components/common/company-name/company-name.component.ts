import {Component, Input} from "@angular/core";

@Component({
  selector: 'company-name',
  templateUrl: 'company-name.component.html',
  styleUrls: ['company-name.component.scss']
})
export class CompanyNameComponent {

  @Input() companyName: string;
  @Input() description: string;


}
