import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { HomeComponent } from './home.component';

let children: Routes;
children = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
