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

  pushupTotal: Observable<any>;
  pushupItems: FirebaseListObservable<PushUp[]>;

  constructor(public auth: AuthService, public pushupService: PushUpService) {
    // this.items = af.database.list(path)
    // this.items.subscribe(items => items.forEach(item => console.log(item)));
  }

  ngOnInit() {
    // this.pushupItems = this.pushupService.getItemsList({})
    // this.pushupItems.subscribe(items => items.forEach(
    //   item => console.log(item))
    // );

  }

  logout() {
    this.auth.signOut();
  }

}
