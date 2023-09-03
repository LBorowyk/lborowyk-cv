import { Component, Input } from '@angular/core';
import { CVItem } from '../../models/cv.data.model';

@Component({
  selector: 'info-panel',
  templateUrl: 'info-panel.component.html',
  styleUrls: ['info-panel.component.scss', './../../../styles.scss'],
})
export class InfoPanelComponent {
  @Input() item: CVItem;
}
