import { Brand } from 'src/brand/entities/brand.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Drink {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cost: number;

  @Column()
  image: string;

  // @Column()
  @ManyToOne((type) => Brand, (brand) => brand.drinks, { eager: true })
  brand: Brand;

  @Column()
  quantity: number;
  newDrink: Promise<Brand | null>;
}
