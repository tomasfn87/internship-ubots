import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie } from './movie.model';


@Injectable()
export class MoviesService {
    constructor(@InjectModel('Movie') private readonly movieModel: Model<Movie>) {}
  /**
  /* Create a new movie
   * @param title
   * @param year
   * @param director
   * @param minutes
   * @param age_rating
   * @param rating
   * @param stars
   * @param genre
   * @param countries
   * @param languages
   */
    async create(
        title: string,
        year: number,
        director: string,
        minutes: number,
        age_rating: number,
        rating: number,
        stars: string[],
        genre: string[],
        countries: string[],
        languages: string[]

  ): Promise<Movie> {
    const createdMovie = new this.movieModel({
        title,
        year,
        director,
        minutes,
        age_rating,
        rating,
        genre,
        stars,
        countries,
        languages
    });
    return createdMovie.save();
  }

  async findAll(): Promise<Movie[]> {
    const allMovies = await this.movieModel.find().exec();
    
    /* O loop "for" abaixo tem por objetivo verificar se o campo
     * "rating" de cada filme da lista de filmes obtida é igual a zero;
    * em caso positivo, será impressa uma mensagem informando que o 
    * filme ainda não foi classificado. 
    */
    for (let movie of allMovies) {
      if (movie['rating'] === 0) {
        console.log(`The movie "${movie['title']}" wasn't rated yet...`);
      }
    }

    return allMovies;
  }

  async findById(id: string): Promise<Movie> {
      const movie = await this.movieModel.findById(id).exec();

      /* De forma análoga, o "if" abaixo verificará se o filme em
       * questão foi ou não classificado, imprimindo uma mensagem
       * em caso negativo.
       */
      if (movie['rating'] === 0) {
        console.log(`The movie "${movie['title']}" wasn't rated yet...`);
      }

      return movie
  }

  async update(id: string, movie: Movie): Promise<Movie> {
    return await this.movieModel.findByIdAndUpdate(
      id,
      movie,
      { new: true }).exec();
  }

  async delete(id: string): Promise<Movie> {
      return await this.movieModel.findByIdAndDelete(id).exec();
  }
}
