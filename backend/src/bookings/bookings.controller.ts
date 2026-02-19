import { Controller, Get, Param, Post } from "@nestjs/common";
import { BookingsService } from "./bookings.service";

@Controller("bookings")
export class BookingsController {
  constructor(private service: BookingsService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Post("approve/:id")
  approve(@Param("id") id: number) {
    return this.service.approve(+id);
  }
}
