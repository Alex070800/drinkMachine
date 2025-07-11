import { Drink } from 'src/drink/entities/drink.entity';
import { GetDrinkDto } from './dto/get-drink.dto';

export class DrinkMapper {
  static toDTO(drink: Drink) {
    let dto: GetDrinkDto = new GetDrinkDto();
    dto.id = drink.id;
    dto.name = drink.name;
    dto.image = drink.image;
    dto.cost = drink.cost;
    dto.brandName = drink.brand.name;
    return dto;
  }
}
