import { TopNavComponent } from './../../ui/top-nav/top-nav.component';
import { Observable } from 'rxjs/Observable';
import { PushUp } from './pushup';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class PushUpService {

  private basePath = '/push-ups';

  pushups$: FirebaseListObservable<PushUp[]> = null; //  list of push up objects
  pushup$: FirebaseObjectObservable<PushUp> = null; //   single object
  userId: string;
  totalPushUps$: number = null;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    })
  }


  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getItemsList(query = {}): FirebaseListObservable<PushUp[]> {
    // if undefined user return
    // tslint:disable-next-line:curly
    if (!this.userId) return;

    this.pushups$ = this.db.list(`push-ups/${this.userId}`);
    return this.pushups$;
  }

  // Return a single observable item
  getItem(key: string): FirebaseObjectObservable<PushUp> {
    const itemPath = `${this.basePath}/${key}`;
    this.pushup$ = this.db.object(itemPath)
    return this.pushup$;
  }

  // Create a bramd new push up
  createItem(item: PushUp): void {
    // create timestamp value
    item.timeStamp = Date.now();
    item.uid = this.userId;

    this.pushups$.push(item)
      .catch(error => this.handleError(error))
  }


  // Update an exisiting item
  updateItem(key: string, value: any): void {
    if (!this.userId) return;
    this.pushups$.update(key, value)
      .catch(error => this.handleError(error))
  }

  // Deletes a single item
  deleteItem(key: string): void {
    this.pushups$.remove(key)
      .catch(error => this.handleError(error))
  }

  // Deletes the entire list of items
  deleteAll(): void {
    this.pushups$.remove()
      .catch(error => this.handleError(error))
  }


  // Default error handling for all actions
  private handleError(error) {
    console.log(error)
  }


}
