import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-monolith",
  templateUrl: "./monolith.component.html",
  styleUrls: ["./monolith.component.scss"]
  // styleUrls: ["./month.component.scss"]
})
export class MonolithComponent implements OnInit {
  @Input() month;

  ngOnInit() {}
}
