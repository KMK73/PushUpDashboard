import { PushUpService } from './../shared/pushup.service';
import { PushUp } from './../shared/pushup';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { Item } from '../shared/item';
// import { ItemService } from '../shared/item.service';

@Component({
  selector: 'pushup-form',
  templateUrl: './pushup-form.component.html',
  styleUrls: ['./pushup-form.component.scss']
})
export class PushUpFormComponent implements OnInit {

  item: PushUp = new PushUp();

  constructor(private pushupSvc: PushUpService) { }

  ngOnInit() {
  }

  createItem() {
    console.log(this.item); 
    debugger; 
    this.pushupSvc.createItem(this.item)
    this.item = new PushUp() // reset item
  }

}
