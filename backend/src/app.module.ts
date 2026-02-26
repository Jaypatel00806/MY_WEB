import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';
import { Booking } from './bookings/booking.entity';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'Jaydb',
      entities: [User, Booking],
      autoLoadEntities: true,
      synchronize: true,
    }),

    AuthModule,
    BookingsModule, // ⭐ IMPORTANT ADD THIS
  ],
})
export class AppModule {}
