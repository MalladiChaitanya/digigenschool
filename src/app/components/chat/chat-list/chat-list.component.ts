import {Component, Output, EventEmitter} from "@angular/core";
/**
 * Created by Chaitanya on 28-07-2020.
 */

@Component({
  selector:'chat-list',
  templateUrl:'./chat-list.component.html',
  styleUrls:['./chat-list.component.scss']
})
export class ChatListComponent{
  @Output()
  showUserProfile:EventEmitter<any> = new EventEmitter<any>();
  @Output()
  showContactProfile:EventEmitter<any> = new EventEmitter<any>();

  showAvatarClicked(){
    this.showUserProfile.emit(true);
  }
  contactAvatarClicked(event){
    this.showContactProfile.emit(true);
  }
}
