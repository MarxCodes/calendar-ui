import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-month",
  templateUrl: "./month.component.html",
  styleUrls: ["./month.component.scss"]
})
export class MonthComponent implements OnInit {
  // @Input() month;

  months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];

  ngOnInit() {}
}
