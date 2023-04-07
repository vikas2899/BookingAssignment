import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { BookingUIComponent } from './booking/booking-ui/booking-ui.component';
import { BookingIPComponent } from './booking/booking-ip/booking-ip.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    BookingUIComponent,
    BookingIPComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
