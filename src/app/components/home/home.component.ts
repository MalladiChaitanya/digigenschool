import {Component} from "@angular/core";
/**
 * Created by Chaitanya on 28-07-2020.
 */
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isUserProfileActive:boolean;
  isContactProfileActive:boolean;
}
