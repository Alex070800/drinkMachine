import { Drink } from 'src/drink/entities/drink.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @OneToMany(() => Drink, (drink) => drink.brand)
  drinks: Drink[];
}
