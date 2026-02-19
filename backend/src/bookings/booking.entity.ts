import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerName: string;

  @Column()
  vehicle: string;

  @Column()
  status: string; // pending / approved / completed

  @Column()
  driver: string;
}
