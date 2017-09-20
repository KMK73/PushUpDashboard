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
  showSpinner = true;
  pushupTotal = 0; 

  constructor(private pushupService: PushUpService) { }

  ngOnInit() {
    console.log('push up list');
    this.pushupItems = this.pushupService.getItemsList()
    this.pushupItems.subscribe((result) => {
      this.showSpinner = false;
      console.log(result);
      // reset total to 0 every new update
      this.pushupTotal = 0;
      result.forEach(element => {
        // create total push ups completed
        this.pushupTotal += element.amount;
      });
    });


  }

  deleteItems() {
    this.pushupService.deleteAll()
  }



}
