import {Component, Output, EventEmitter} from "@angular/core";
/**
 * Created by Chaitanya on 28-07-2020.
 */

@Component({
  selector:'user-profile',
  templateUrl:'./user-profile.component.html',
  styleUrls:['./user-profile.component.scss']
})
export class UserProfileComponent{
  @Output()
  closeUserProfile:EventEmitter<any> = new EventEmitter<any>();

  btnBackClicked(){
   this.closeUserProfile.emit(true);
  }
}
