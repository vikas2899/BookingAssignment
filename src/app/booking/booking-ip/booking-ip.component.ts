import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-ip',
  templateUrl: './booking-ip.component.html',
  styleUrls: ['./booking-ip.component.css'],
})
export class BookingIPComponent implements OnInit {
  public inputNumber: number;
  public seatsBookedMessage: string = '';

  constructor(private bookingService: BookingService) {
    this.inputNumber = 1;
  }

  submitNumberOfSeats() {
    if (this.inputNumber < 1 || this.inputNumber > 7) {
      alert('Seats cannot be zero, negative or greater than 7. Try Again!');
      return;
    }

    if (
      this.bookingService.getTotalSeats() <
      this.bookingService.getTotalSeatsBooked() + this.inputNumber
    ) {
      alert('No seats available!');
      return;
    }
    this.seatsBookedMessage = 'Seats Booked : ';
    let seatsBooked = this.bookingService.bookSeats(this.inputNumber);
    for (let i of seatsBooked) {
      this.seatsBookedMessage += i + ', ';
    }
    this.seatsBookedMessage = this.seatsBookedMessage.slice(0, -2);
  }

  ngOnInit(): void {}
}
