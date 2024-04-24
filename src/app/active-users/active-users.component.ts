import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  constructor(private usersService: UsersService) {}

  onSetToInactive(id: number) {
    this.usersService.inactiveUsers.push(this.usersService.activeUsers[id]);
    this.usersService.activeUsers.splice(id, 1);
  }
}
