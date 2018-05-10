import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  countdown: string;

  constructor() { }

  ngOnInit() {
        // Set the date we're counting down to
        var countDownDate = new Date("Apr 12, 2019 17:00:00").getTime();
        
            // Update the count down every 1 second
            var x = setInterval(() => {
        
              // Get todays date and time
              var now = new Date().getTime();
        
              // Find the distance between now an the count down date
              var distance = countDownDate - now;
        
              // Time calculations for days, hours, minutes and seconds
              var days = Math.floor(distance / (1000 * 60 * 60 * 24));
              var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
              // Display the result in the element with id="demo"
              this.countdown = `${days}  nap ${hours}:${minutes}:${seconds}`;
        
              // If the count down is finished, write some text
              if (distance < 0) {
                clearInterval(x);
                this.countdown = "EXPIRED";
              }
            }, 1000);
  }

}
