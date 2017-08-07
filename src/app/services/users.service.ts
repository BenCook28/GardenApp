import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UsersService{
	createUser(u: User){
        this.afd.database.ref('users/' + u.email).set(u);
        this.afd.database.ref('users/' + u.password).set(u);
	}
	constructor(private afd: AngularFireDatabase, private router: Router){}
}