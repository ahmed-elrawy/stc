import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @Input() logo?: string;
  @Input() width = 300;
  authForm!: FormGroup;
  invalidCredentials = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _auth: AuthService,
    private _route: ActivatedRoute
  ) {
    this.createAuthForm();
  }

  createAuthForm(): void {
    this.authForm = this._formBuilder.group({
      email: ['user@domain.com', [Validators.email, Validators.required]],
      passwd: ['user', [Validators.minLength(4), Validators.required]],
    });
  }
  requestSignIn() {
    localStorage.clear();
    const email = this.authForm.get('email')?.value;
    const passwd = this.authForm.get('passwd')?.value;
    this._auth.signIn(email, passwd).subscribe((isConnected: Boolean) => {
      if (isConnected) {
        const returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this._router.navigateByUrl(returnUrl);
      } else {
        this.invalidCredentials = true;
      }
    });
  }
}
