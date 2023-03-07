import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { TokenAnswer, User } from '@app/core/models/user';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwt = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {}

  signIn(email: string, password: string) {
    return this.http.post<TokenAnswer>('/api/auth', { email, password }).pipe(
      map((response:TokenAnswer) => {
        if (response && response.token) {
          const decodedToken = this.jwt.decodeToken(response.token);
          localStorage.setItem('token', response.token);
          return true;
        }
        return false;
      })
    );
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['/'])
  }

  isLogged() {
    if (this.getUser() !== null) {
      return true;
    }
    return false;
  }

  isAdmin() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.jwt.decodeToken(token);
      return decodedToken['admin'] ? true : false;
    }
    return false;
  }

  getUser(): User | null {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.jwt.decodeToken(token);
      return decodedToken as User;
    }
    return null;
  }
}
