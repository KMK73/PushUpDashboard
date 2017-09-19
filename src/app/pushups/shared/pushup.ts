export class PushUp {

  $key: string;
  uid?: string;
  amount: number;
  active = true;
  timeStamp: number;

  constructor() {
    this.timeStamp = Date.now();
  }

}
