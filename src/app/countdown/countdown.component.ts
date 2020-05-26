import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-countdown',
  template: `<div class="text">{{ displayMinutes }} : {{displaySeconds}}</div>`,
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  public hasGameBegun: boolean;
  public now: Date = new Date();
  public minutes = this.now.getMinutes();
  public seconds = this.now.getSeconds();

  public displayMinutes: any;
  public displaySeconds: any;

  constructor() {
    
    setInterval(() => {
      this.now = new Date();
      this.minutes = this.now.getMinutes();
      this.seconds = this.now.getSeconds();
      this.theTimeIs()
    } ,1000);
   }
  

  ngOnInit(): void {
  }
  theTimeIs() {
    if (this.minutes == 30 && this.seconds== 0) {
      this.initateStart();
    }
    if (this.minutes == 0 && this.seconds== 0) {
      this.initateStart();
    }
    else {
      if (this.minutes < 30){
        this.displayMinutes = (30-this.minutes)-1;
        this.displaySeconds = (60-this.seconds);
      if (this.displaySeconds < 10) {
          this.displaySeconds = "0"+ this.displaySeconds;
        }
      }
      if (this.minutes > 30) {
        this.displayMinutes = (60-this.minutes)-1;
        this.displaySeconds = (60-this.seconds);
      if (this.displaySeconds < 10) {
          this.displaySeconds = "0"+ this.displaySeconds;
        }
      }
    }
  }

  initateStart() {
    // this is ran when the countdown hits 0m 0s, at that point all the channels 
    // currently in the queue should added to the "liveMatch" collection- 
  }

}
