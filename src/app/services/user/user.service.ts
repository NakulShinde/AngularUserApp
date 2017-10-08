import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { User } from './../../interfaces/user';
import { USERS } from './../../interfaces/mock-users';


@Injectable()
export class UserService {

  	constructor() { }
  	
	getUsers(): Promise<User[]> {
		return Promise.resolve(USERS);
	}
}
