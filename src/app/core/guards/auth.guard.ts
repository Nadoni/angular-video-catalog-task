import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {CoreModule} from '../core.module';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: CoreModule
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('CanActivate Guard is called');
    const { url } = state;
    console.log('CanActivate Guard is called url', url);
    console.log('CanActivate Guard is called state', state);
    return this.checkLogin(url);
  }

  private checkLogin(url: string): boolean {
    if (this.authService.isLoggedUser) {
      // this.router.navigate(['/courses']);
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
