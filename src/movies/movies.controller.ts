import {
    Controller,
    Post,
    Body,
    Get,
    Param
} from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Post()
    async create(
        @Body('title') title: string,
        @Body('year') year: number,
        @Body('director') director: string,
        @Body('minutes') minutes: number,
        @Body('age_rating') age_rating: number,
        @Body('rating') rating: number,
        @Body('stars') stars: string[],
        @Body('genre') genre: string[],
        @Body('countries') countries: string[],
        @Body('languages') languages: string[]
    ) {
        const generatedId = await this.moviesService.create(
            title,
            year,
            director,
            minutes,
            age_rating,
            rating,
            stars,
            genre,
            countries,
            languages
        )
        return { id: generatedId } 
    }

    @Get()
    async findAll(): Promise<any> {
        return this.moviesService.findAll()
    }

    @Get(':id')
    async findById(@Param('id') id) {
        return this.moviesService.findById(id)
    }
}
