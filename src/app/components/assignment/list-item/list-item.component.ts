import { Component, Output, Input, EventEmitter } from "@angular/core";
/**
 * Created by Chaitanya on 28-07-2020.
 */

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Output()
  showContactProfile: EventEmitter<any> = new EventEmitter<any>();
  @Input() title: String;
  @Input() desc: String;
  @Input() subject: String;
  contactAvatarClicked() {
    this.showContactProfile.emit(true);
  }
}

