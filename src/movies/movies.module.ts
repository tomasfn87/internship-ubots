import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { MovieSchema } from './movie.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Movie', schema: 'MovieSchema' }]),
    ],
    controllers: [MoviesController],
    providers: [MoviesService],
})
export class MoviesModule {

}
