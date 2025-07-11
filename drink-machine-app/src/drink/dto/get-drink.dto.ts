import { ApiProperty } from '@nestjs/swagger';

export class GetDrinkDto {
  @ApiProperty({ description: 'Id', nullable: false })
  id: number;

  @ApiProperty({ description: 'Название', nullable: false })
  name: string;

  @ApiProperty({ description: 'Стоимость, руб.', nullable: false })
  cost: number;

  @ApiProperty({ description: 'Имя бренда', nullable: false })
  brandName: string;

  @ApiProperty({ description: 'Изображение, base64', nullable: false })
  image: string;
}
