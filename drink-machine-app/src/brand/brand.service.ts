import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private drinkRepository: Repository<Brand>,
  ) {}
  create(createBrandDto: CreateBrandDto) {
    return 'This action adds a new brand';
  }

  findAll() {
    return `This action returns all brand`;
  }

  findOne(id: number) {
    return this.drinkRepository.findOneBy({ id });
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
