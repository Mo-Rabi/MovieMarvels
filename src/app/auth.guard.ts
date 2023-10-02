import { CanActivateFn } from '@angular/router';

 export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

// if(this.loggedIn){
//   return true ;
// }
// window.alert("you have permision to view this page ");
// return this.router.navigate(['']) || false;
