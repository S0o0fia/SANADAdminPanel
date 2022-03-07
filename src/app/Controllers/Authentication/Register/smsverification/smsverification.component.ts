import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smsverification',
  templateUrl: './smsverification.component.html',
  styleUrls: ['./smsverification.component.scss']
})
export class SMSVerificationComponent implements OnInit {
  timeLeft: number = 60;
  interval : any;
  constructor() {
    this.startTimer()
  }

  ngOnInit(): void {
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
