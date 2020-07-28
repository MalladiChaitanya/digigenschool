import {Component, Output, EventEmitter} from "@angular/core";
/**
 * Created by Chaitanya on 28-07-2020.
 */

@Component({
  selector:'contact-profile',
  templateUrl:'./contact-profile.component.html',
  styleUrls:['./contact-profile.component.scss']
})
export class ContactProfileComponent{
  @Output()
  closeContactProfile:EventEmitter<any> = new EventEmitter<any>();

  btnBackClicked(){
    this.closeContactProfile.emit(true);
  }
}
