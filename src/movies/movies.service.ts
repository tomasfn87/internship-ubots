import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie } from './movie.model';


@Injectable()
export class MoviesService {
    constructor(@InjectModel('Movie') private readonly movieModel: Model<Movie>) {}
  /**
   /* Create a new movie
   * @param name
   * @param year
   * @param director
   * @param minutes
   * @param age_rating
   * @param stars
   * @param countries
   * @param languages
   */
    async create(
        name: string,
        year: number,
        director: string,
        minutes: number,
        age_rating: number,
        stars: Object,
        countries: Object,
        languages: Object

  ): Promise<Movie> {
    const createdMovie = new this.movieModel({
        name, year, director, minutes, age_rating, stars, countries, languages
    });
    return createdMovie.save();
  }

  async findAll(): Promise<Movie[]> {
    return this.movieModel.find().exec();
  }

  async findById(id: string): Promise<Movie> {
      return await this.movieModel.findById(id).exec();
  }

  async update(id: string, movie: Movie): Promise<Movie> {
    return await this.movieModel.findByIdAndUpdate(id, movie, { new: true }).exec();
  }

  async delete(id: string): Promise<Movie> {
      return await this.movieModel.findByIdAndDelete(id).exec();
  }
}
