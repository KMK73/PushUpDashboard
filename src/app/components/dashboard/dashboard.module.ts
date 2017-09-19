import { DashboardComponent } from './dashboard.component';
import { PushUpFormComponent } from './../../pushups/pushup-form/pushup-form.component';
import { PushUpDetailComponent } from './../../pushups/pushup-detail/pushup-detail.component';
import { PushUpListComponent } from './../../pushups/pushup-list/pushup-list.component';
import { PushUpService } from './../../pushups/shared/pushup.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    DashboardComponent,
    PushUpListComponent,
    PushUpDetailComponent,
    PushUpFormComponent,
  ],
  providers: [
    PushUpService
  ]
})
export class DashboardModule { }
