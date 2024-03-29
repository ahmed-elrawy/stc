import { inject, Injectable } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';

export type Permission = 'ADMIN' | 'USER';

@Injectable({
  providedIn: 'root'
})
export class UserPermissionsService   {
   protected auth  = inject(AuthService)

    hasPermissions = (permissions: Permission[]) =>{
      if(this.auth.isLogged()){
        if(permissions.includes('ADMIN')) {
          return this.auth.isAdmin()
        }else if (permissions.includes('USER')){
          return !this.auth.isAdmin()
        }
      }
      return false
    }
}