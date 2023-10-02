import { CanActivateFn } from '@angular/router';

export const authServiceGuard: CanActivateFn = (route, state) => {
  return true;
};
