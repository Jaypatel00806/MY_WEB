import { Injectable } from "@nestjs/common";

@Injectable()
export class BookingsService {
  private bookings = [
    { id: 1, customerName: "Jay", vehicle: "Sedan", status: "pending", driver: "Ravi" },
    { id: 2, customerName: "Rahul", vehicle: "SUV", status: "approved", driver: "Amit" },
  ];

  findAll() {
    return this.bookings;
  }

  approve(id: number) {
    const booking = this.bookings.find(b => b.id === id);
    if (booking) booking.status = "approved";
    return booking;
  }
}
