import { ApiProperty } from '@nestjs/swagger';

export class CreateDrinkDto {
  @ApiProperty({ description: 'Название', nullable: false })
  name: string;

  @ApiProperty({ description: 'Стоимость, руб.', nullable: false })
  cost: number;

  @ApiProperty({ description: 'Изображение, base64', nullable: false })
  image: string;

  @ApiProperty({ description: 'ID бренда', nullable: false, type: Number })
  brandId: number;

  @ApiProperty({ description: 'Количество, шт.', nullable: false, type: Number })
  quantity: number;
}
