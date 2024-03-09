import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-account-pro',
  standalone: true,
  imports: [],
  templateUrl: './account-pro.component.html',
  styleUrl: './account-pro.component.css'
})
export class AccountProComponent {

  constructor(private user:UsersService){
    this.user.getData().subscribe(x=>
      console.log(x))
  }
}
