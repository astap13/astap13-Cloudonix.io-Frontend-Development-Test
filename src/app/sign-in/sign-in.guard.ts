import { CanActivateFn, Router } from '@angular/router';

export const signInGuard: CanActivateFn = (route, state) => {
  const auth = localStorage.getItem('auth');

  if (auth === 'true') {
    return true;
  } else {
    const router = new Router(); 
    router.navigate(['/sign-in']); 
    return false;
  }
};
