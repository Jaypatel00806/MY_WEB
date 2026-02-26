import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { BookingsService } from "./bookings.service";

@Controller("bookings")
export class BookingsController {
  constructor(private service: BookingsService) {}

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Post("approve/:id")
  approve(@Param("id") id: number) {
    return this.service.approve(Number(id));
  }
}