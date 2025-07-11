import { Module } from '@nestjs/common';
import { DrinkService } from './drink.service';
import { DrinkController } from './drink.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drink } from './entities/drink.entity';
import { BrandModule } from 'src/brand/brand.module';

@Module({
  imports: [TypeOrmModule.forFeature([Drink]), BrandModule],
  controllers: [DrinkController],
  providers: [DrinkService],
})
export class DrinkModule {}
