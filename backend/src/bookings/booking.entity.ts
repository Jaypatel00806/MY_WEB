import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pickup: string;

  @Column()
  drop: string;

  @Column()
  date: string;

  @Column()
  passengers: string;

  @Column()
  vehicle: string;

  @Column()
  customerName: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  status: string;
}