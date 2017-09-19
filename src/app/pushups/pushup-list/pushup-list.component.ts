import { Observable } from 'rxjs/Observable';
import { PushUpService } from './../shared/pushup.service';
import { Component, OnInit } from '@angular/core';
import { PushUp } from '../shared/pushup';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'pushup-list',
  templateUrl: './pushup-list.component.html',
  styleUrls: ['./pushup-list.component.scss']
})
export class PushUpListComponent implements OnInit {

  pushupItems: FirebaseListObservable<PushUp[]>;
  pushupTotal$: Observable<number>;
  showSpinner = true;


  constructor(private pushupService: PushUpService) { }

  ngOnInit() {
    this.pushupItems = this.pushupService.getItemsList({ limitToLast: 5 })
    this.pushupItems.subscribe(
      (items) => {
        this.showSpinner = false;
        items.forEach(
            item => {
              console.log(item);
              this.pushupTotal$ += item.amount; 
            }
        )
      }
    )
  }

  deleteItems() {
    this.pushupService.deleteAll()
  }



}
