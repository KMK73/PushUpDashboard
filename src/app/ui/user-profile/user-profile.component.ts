import { FirebaseListObservable } from 'angularfire2/database';
import { PushUpService } from './../../pushups/shared/pushup.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { PushUp } from '../../pushups/shared/pushup';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {


  pushupTotal$;
  pushupItems;

  constructor(public auth: AuthService, public pushupService: PushUpService) {
  }

  ngOnInit() {
    // console.log('user profile');
    // this.pushupTotal$ = this.pushupService.getTotalPushups().subscribe();
    // debugger;
    // console.log(this.pushupTotal$);
    // let myItems = [];
    // this.pushupItems = this.pushupService.getItemsList().subscribe((pushups) => {
    //   pushups.forEach((item: PushUp) => {
    //     console.log('push up item: ', item);
    //     // let item = this.af.database.object('/items/'itemKey.$value);
    //     // item.subscribe((itemData) => {
    //     //   myItems.push(itemData);
    //     // });
    //   });
    // });
  }

  logout() {
    this.auth.signOut();
  }

}
