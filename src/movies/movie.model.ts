import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    director: String,
    minutes: Number,
    age_rating: Number,
    rating: Number,
    stars: Object,
    genre: Object,
    countries: Object,
    languages: Object,
})

export interface Movie extends mongoose.Document {
    title: String,
    year: Number,
    director: String,
    minutes: Number,
    age_rating: Number,
    rating: Number,
    stars: Object,
    genre: Object,
    countries: Object,
    languages: Object
}