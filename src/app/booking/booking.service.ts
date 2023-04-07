import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private totalSeats: number = 80;
  private seatsBooked: Array<boolean>;
  private lastBookedSeat: number = 0;

  constructor() {
    this.seatsBooked = new Array(this.totalSeats).fill(false);
  }

  bookSeats(noOfSeats: number) {
    let i;
    let seatsBooked = [];
    for (i = this.lastBookedSeat; i < this.lastBookedSeat + noOfSeats; i++) {
      this.seatsBooked[i] = true;
      seatsBooked.push(i + 1);
    }
    this.lastBookedSeat = i;
    return seatsBooked;
  }

  getTotalSeats() {
    return this.totalSeats;
  }

  getTotalSeatsBooked() {
    let booked = 0;
    for (let i = 0; i < this.seatsBooked.length; i++) {
      if (this.seatsBooked[i]) booked++;
    }

    return booked;
  }

  getSeatStatus(index: number): boolean {
    return this.seatsBooked[index];
  }
}
