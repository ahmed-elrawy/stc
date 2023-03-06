import { Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule } from '@core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeServerInterceptor } from 'assets/fake-server.service';
import { AuthService } from './features/login/auth.service';


//app.module.ts (red-app)

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: AuthService},
    { provide: HTTP_INTERCEPTORS, useClass: FakeServerInterceptor, multi: true }
  ],
})
export class AppModule { }
