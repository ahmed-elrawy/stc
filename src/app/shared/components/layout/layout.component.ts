import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-navbar></app-navbar>
    <div class="content-section" >
      <router-outlet></router-outlet>
    </div>
  `,

})
export class LayoutComponent {
}

 








