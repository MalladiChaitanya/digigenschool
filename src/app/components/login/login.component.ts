import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  toogleclass: boolean;

  constructor(private formBuilder: FormBuilder, public appService: AppService, private router: Router) {
    this.userForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      const obj = {
        'username': this.userForm.value.name,
        'password': this.userForm.value.password
      };
      this.appService.userlogin(obj).subscribe(data => {
        if (data['status'] > 400) {
          this.toogleclass = true;
        } else {
          sessionStorage.setItem('username', data['user'].username);
          this.appService.user.username = data['user'].username;
          this.toogleclass = false;
          this.router.navigate(['/dashboard']);
        }
        return true;
      },
        error => {
          this.toogleclass = true;
        });
    }
  }

  ngOnInit(): void {
  }

}

