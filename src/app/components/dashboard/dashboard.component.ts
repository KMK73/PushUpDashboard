import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'calendar-utils/dist/calendar-utils';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];
  constructor() { }

  ngOnInit() {
  }

}
