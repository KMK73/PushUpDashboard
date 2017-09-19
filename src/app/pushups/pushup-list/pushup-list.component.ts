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


  constructor(private pushupService: PushUpService) { }

  ngOnInit() {
    this.pushupItems = this.pushupService.getItemsList({ limitToLast: 5 })
    this.pushupItems.subscribe(() => this.showSpinner = false)
  }

  deleteItems() {
    this.pushupService.deleteAll()
  }



}
