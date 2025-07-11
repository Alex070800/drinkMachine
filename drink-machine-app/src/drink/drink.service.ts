import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { UpdateDrinkDto } from './dto/update-drink.dto';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Drink } from './entities/drink.entity';
import { DataSource, Repository } from 'typeorm';
import { DrinkMapper } from './drink-mapper';
import { BrandService } from 'src/brand/brand.service';
import { Brand } from 'src/brand/entities/brand.entity';
import { ok } from 'assert';

@Injectable()
export class DrinkService {
  constructor(
    @InjectRepository(Drink)
    private drinkRepository: Repository<Drink>,
    private brandService: BrandService,
  ) {}

  async create(createDrinkDto: CreateDrinkDto) {
    try {
      let newDrink: Drink = new Drink();
      newDrink.name = createDrinkDto.name;
      newDrink.image = createDrinkDto.image;
      newDrink.quantity = createDrinkDto.quantity;
      newDrink.cost = createDrinkDto.cost;

      newDrink.brand =
        (await this.brandService.findOne(createDrinkDto.brandId)) ||
        new Brand();

      let drink = this.drinkRepository.create(newDrink);
      return (await this.drinkRepository.save(drink)).id;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    let result: Drink[] = await this.drinkRepository.find();
    let res = result.map((drink: Drink) => DrinkMapper.toDTO(drink));
    return res;
  }

  update(id: number, updateDrinkDto: UpdateDrinkDto) {
    return `This action updates a #${id} drink`;
  }

  async remove(id: number) {
    try {
      const drink = await this.drinkRepository.findOneBy({ id });
      if (drink) {
        await this.drinkRepository.remove(drink);
        return ok('Напиток успешно удален.');
      } else {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Напитка с таким id не существует!',
          },
          HttpStatus.NOT_FOUND,
          {
            cause: 'Напитка с таким id не существует!',
          },
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
}
