import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  @Output() fire: EventEmitter<any> = new EventEmitter();

  constructor() { }

  formStat = false;

  change() {
    this.formStat = !this.formStat;
    return this.fire.emit(this.formStat);
  }

  getEmittedValue() {
    return this.fire;
  }
}
