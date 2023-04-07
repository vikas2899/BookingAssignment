import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-ui',
  templateUrl: './booking-ui.component.html',
  styleUrls: ['./booking-ui.component.css'],
})
export class BookingUIComponent implements OnInit {
  public noOfSeats: Number = 80;

  constructor(private bookingService: BookingService) {}

  numofBoxesBasedonSeats(n: Number): Array<any> {
    return new Array(n);
  }

  getSeatsBookedCount() {
    return this.bookingService.getTotalSeatsBooked();
  }

  getTotalSeatsCount() {
    return this.bookingService.getTotalSeats();
  }

  isSeatIsBooked(index: number) {
    return this.bookingService.getSeatStatus(index);
  }

  ngOnInit(): void {}
}
