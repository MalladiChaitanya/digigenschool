import {Component, Output, EventEmitter} from "@angular/core";
/**
 * Created by Chaitanya on 28-07-2020.
 */

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent {
  @Output()
  showOptions:EventEmitter<any> = new EventEmitter<any>();

  btnOptionsClicked() {
    this.showOptions.emit(true);
  }
}
