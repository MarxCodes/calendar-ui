import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { SearchComponent } from "./search/search.component";
import { MonthComponent } from "./months/month.component";
import { MonolithComponent } from "./months/month/monolith.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CalendarComponent,
    SearchComponent,
    MonthComponent,
    MonolithComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
