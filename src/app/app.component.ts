import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  // months = [
  //   "JAN",
  //   "FEB",
  //   "MAR",
  //   "APR",
  //   "MAY",
  //   "JUN",
  //   "JUL",
  //   "AUG",
  //   "SEP",
  //   "OCT",
  //   "NOV",
  //   "DEC"
  // ];
}
