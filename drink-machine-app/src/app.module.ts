import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DrinkModule } from './drink/drink.module';

import { PurchaseModule } from './purchase/purchase.module';
import { BrandModule } from './brand/brand.module';
import { Drink } from './drink/entities/drink.entity';
import { Brand } from './brand/entities/brand.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'drink_machine',
      entities: [Drink, Brand],
      synchronize: false,
      autoLoadEntities: true,
    }),
    DrinkModule,
    BrandModule,
    PurchaseModule,
  ],
})
export class AppModule {}
