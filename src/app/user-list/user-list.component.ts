import { Component, OnInit } from '@angular/core';

import { User } from './../interfaces/user';
import { UserService } from './../services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	
	users: User[];

	constructor(private userService: UserService) { }

	ngOnInit() {
		this.getUsers();
	}

  	getUsers(): void {
		this.userService.getDelayedUsers().then(users => this.users = users);
	}
}
