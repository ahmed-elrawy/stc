import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const fakeAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwibmFtZSI6ImFkbWluIiwidXNlcm5hbWUiOiJhZG1pbiJ9.Q-D4UzfCJIz8id_t02zkueVF2VHjD-uD02_1pIgAx4U';

const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ZmFsc2UsIm5hbWUiOiJ1c2VyIiwidXNlcm5hbWUiOiJ1c2VyIn0.1YshFCuwUbqzQ3fuyfDMngC5CpAhtZGfUYsCRPLSsL0';

const UserCredentials = {
  email: 'user@domain.com',
  password: 'user'
};

const AdminCredentials = {
  email: 'admin@domain.com',
  password: 'admin'
};

export class FakeServerInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('/api/auth')) {
      const { email, password } = req.body;
      if (email == UserCredentials.email && password == UserCredentials.password) {
        
        return of(new HttpResponse({
          status: 200,
          body: {
            token: fakeToken
          }
        }));
      } else if (email == AdminCredentials.email && password == AdminCredentials.password) {
        return of(new HttpResponse({
          status: 200,
          body: {
            token: fakeAdminToken
          }
        }));
      }
    }
    return of(new HttpResponse({
      status: 401  // Unauthorized
    }));
    // return next.handle(req);
  }
}