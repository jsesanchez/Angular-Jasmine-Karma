import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing';
  public error = false;
  public users;
  public employee;

  constructor(public userService: UserService) {}

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.error = false;
    });
  }

}
