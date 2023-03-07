import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @Input() logo?: string
  @Input() width = 300;
  authForm!: FormGroup;
  invalidCredentials = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService, private route: ActivatedRoute,) {
    this.authForm = formBuilder.group({
      email: ['user@domain.com',  [ Validators.email, Validators.required ]],
      passwd: ['user', [ Validators.minLength(4), Validators.required ]]
    });
  }

  requestSignIn() {
    localStorage.clear()
    const email = this.authForm.get('email')?.value;
    const passwd = this.authForm.get('passwd')?.value;
    this.auth.signIn(email, passwd).subscribe(isConnected => {
      if (isConnected) {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigateByUrl(returnUrl);      }
      else {
        this.invalidCredentials = true;
      }
    })
  }
}