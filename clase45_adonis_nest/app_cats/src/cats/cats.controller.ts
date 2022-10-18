import { Body, Controller, Get, Post } from '@nestjs/common';

import { CatsService } from './cats.service';
import { CreateCatDTO } from 'src/dto/create-cat.dto';
import { Cat } from 'src/interfaces/cat.interface';

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDTO: CreateCatDTO) {
        this.catsService.create(createCatDTO)
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll()
    }

}
