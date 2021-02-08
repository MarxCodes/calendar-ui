import { Component, HostListener,  Input, OnInit } from "@angular/core";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"]
})
export class CalendarComponent implements OnInit {
  @Input() name: string;
  
  // @HostListener()

  today = new Date();
  
  day = this.today.getDate();
  month = this.today.getMonth();
  year = this.today.getFullYear();
  weekDayStart = this.today.getDay();
  days = ["M", "T", "W", "T", "F", "S", "S"];
  ngOnInit() {
    // console.log(this.day)
   console.log(
      this.day,
      this.month,
      this.year,
      this.weekDayStart
      // new Date(this.year, this.month + 1, 0).getDate()
      )
  }
}


/* 
1) Show search bar page 
2) Show months 
3) show calendar for those months 




*/