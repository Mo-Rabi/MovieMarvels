<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  public search = new BehaviorSubject<string>('')
  constructor() { }
}
=======
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }
}
>>>>>>> origin/main
