import {Component, Output, EventEmitter} from "@angular/core";
/**
 * Created by Chaitanya on 28-07-2020.
 */

@Component({
  selector:'single-chat',
  templateUrl:'./single-chat.component.html',
  styleUrls:['./single-chat.component.scss']
})
export class SingleChatComponent{
  @Output()
  showContactProfile:EventEmitter<any> = new EventEmitter<any>();
  contactAvatarClicked(){
    this.showContactProfile.emit(true);
  }
}
