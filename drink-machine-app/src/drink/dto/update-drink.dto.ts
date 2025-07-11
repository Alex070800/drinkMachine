import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDrinkDto } from './create-drink.dto';

export class UpdateDrinkDto extends PartialType(CreateDrinkDto) {
  @ApiProperty({ description: 'Название', nullable: true })
  name: string;

  @ApiProperty({ description: 'Изображение, base64', nullable: true })
  image: string;

  @ApiProperty({ description: 'Стоимость, руб.', nullable: true })
  cost: number;
}
