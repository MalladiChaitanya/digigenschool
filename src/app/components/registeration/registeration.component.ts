import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  registerForm: FormGroup;
  toogleclass: boolean;
  constructor(private formBuilder: FormBuilder, public appService: AppService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'email': ['', [Validators.required, Validators.email]],
      'phone': ['', [Validators.required, Validators.pattern(new RegExp("[0-9 ]{10}"))]],
      'grade': ['', [Validators.required]],
      'section': ['', Validators.required],
      'fname': ['', [Validators.required]],
      'lname': ['', [Validators.required]],
      'parentid': ['', [Validators.required]]
    });
  }

  saveRegister() {
    if (this.registerForm.dirty && this.registerForm.valid) {
      const obj = {
        fname: this.registerForm.value.fname,
        lname: this.registerForm.value.lname,
        username: this.registerForm.value.username,
        password: this.registerForm.value.password,
        grade: this.registerForm.value.grade,
        section: this.registerForm.value.section,
        email: this.registerForm.value.email,
        phone: this.registerForm.value.phone,
        parentid: this.registerForm.value.parentid,
      };
      this.appService.registerUser(obj).subscribe(data => {
        if (data['status'] < 400) {
          console.log('success');
          sessionStorage.setItem('username', this.registerForm.value.username);
          this.appService.user.username = this.registerForm.value.username;
          this.router.navigate(['/dashboard']);
        }
        return true;
      },
        error => {
          console.error('Error ');
        });
    }
  }

  ngOnInit(): void {
  }

}
