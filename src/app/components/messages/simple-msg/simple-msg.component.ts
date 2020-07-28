import {Component, Input} from "@angular/core";
/**
 * Created by Chaitanya on 26-07-2020.
 */

@Component({
  selector: 'simple-msg',
  templateUrl: './simple-msg.component.html',
  styleUrls: ['./simple-msg.component.scss']
})
export class SimpleMsgComponent {

  @Input()
  isSent:boolean;

  @Input()
  message:string;
}
