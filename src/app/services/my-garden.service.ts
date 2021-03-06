import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Plant } from '../models/plants'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class MyGardenService{
	createPlant(p: Plant){
		this.afd.database.ref('plant/' + p.common).set(p)
	}
	
	delete(key: String){
		this.afd.database.ref('plants/' + key ).set(null).then((e)=>{
			console.log(e, "In the callback")
		})

	}

	updatePlant(p: Plant, id: String){
		return this.afd.database.ref('plants/' + id).update(p)
		.then(() => {
            this.router.navigateByUrl('/my-garden');
        })
	}

	getPlant(id: string){
		return this.afd.database.ref('plants/' + id).once('value')
        .then(function(s) {
			console.log(s.val());
            return s.val();
        })
    }
        constructor(private afd: AngularFireDatabase, private route: ActivatedRoute, private router: Router){
			
		}

	}
	
