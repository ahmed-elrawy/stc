import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPermissionsService } from './core/guards/user- permission.service';
import { AuthGuard } from './features/login/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/admin/admin.module').then((m) => m.AdminModule),
        canMatch: [
          () => inject(UserPermissionsService).hasPermissions(['ADMIN']),
        ],
      },
      {
        path: '',
        loadChildren: () =>
          import('./features/user/products/product.module').then(
            (m) => m.ProductModule
          ),
        canMatch: [
          () => inject(UserPermissionsService).hasPermissions(['USER']),
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
