import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DrinkService } from './drink.service';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { UpdateDrinkDto } from './dto/update-drink.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetDrinkDto } from './dto/get-drink.dto';

@Controller('drink')
export class DrinkController {
  constructor(private readonly drinkService: DrinkService) {}

  @ApiOperation({ summary: 'Добавление напитка' })
  @ApiResponse({
    status: 200,
    description: 'Id нового напитка',
    type: Number,
  })
  @Post()
  create(@Body() createDrinkDto: CreateDrinkDto) {
    return this.drinkService.create(createDrinkDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получение всех напитков в наличии' })
  @ApiResponse({
    status: 200,
    description: 'Напитки в наличии',
    type: [GetDrinkDto],
  })
  @ApiResponse({
    status: 201,
    description: 'Нет напитков в наличии',
  })
  findAll() {
    return this.drinkService.findAll();
  }

  @ApiOperation({ summary: 'Изменение напитка' })
  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Обновленный напиток',
    type: GetDrinkDto,
  })
  update(@Param('id') id: string, @Body() updateDrinkDto: UpdateDrinkDto) {
    return this.drinkService.update(+id, updateDrinkDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление напитка' })
  remove(@Param('id') id: string) {
    return this.drinkService.remove(+id);
  }
}
