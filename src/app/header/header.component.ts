import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  @Output() tabSelected = new EventEmitter<string>();

  selectTab(tab: string) {
    this.tabSelected.emit(tab);
  }
}
