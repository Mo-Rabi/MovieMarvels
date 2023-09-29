import { Component } from '@angular/core';
import { SharedServiceService } from '../service/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public searchTerm: string = '';
  constructor(private cartService : SharedServiceService) {}
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm)
    this.cartService.search.next(this.searchTerm)
  }

}
