import { PushUpService } from './../shared/pushup.service';
import { Component, OnInit, Input } from '@angular/core';
// import { ItemService } from '../shared/item.service';
// import { Item } from '../shared/item';
import { PushUp } from '../shared/pushup';

@Component({
  selector: 'pushup-detail',
  templateUrl: './pushup-detail.component.html',
  styleUrls: ['./pushup-detail.component.scss']
})
export class PushUpDetailComponent implements OnInit {

  @Input() item: PushUp;

  constructor(private pushupSvc: PushUpService) { }

  ngOnInit() {
  }

  updateTimeStamp() {
    const date = new Date().getTime()
    this.pushupSvc.updateItem(this.item.$key, { timeStamp: date })
  }

  updateActive(value: boolean) {
    this.pushupSvc.updateItem(this.item.$key, { active: value })
  }

  deleteItem() {
    this.pushupSvc.deleteItem(this.item.$key)
  }

}
