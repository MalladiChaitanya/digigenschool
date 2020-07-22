import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, public appService: AppService, public router: Router) { }

  ngOnInit() {
  }
  signout() {
    this.appService.user.username = '';
    sessionStorage.removeItem('username');
    this.router.navigate(['signin']);
  }
}
