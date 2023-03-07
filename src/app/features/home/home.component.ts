import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="center">
      <button mat-button routerLink="/products">Products</button>
      <button mat-button routerLink="/login">Login</button>
    </div>
  `,
  styles: [
    `
      .center {
        position: fixed;
        left: 50%;
        top: 50%;
      }
    `,
  ],
})
export class HomeComponent {}
