import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
    name: String,
    year: Number,
    director: String,
    minutes: Number,
    age_rating: Number,
    stars: Object,
    countries: Object,
    languages: Object
})

export interface Movie extends mongoose.Document {
    name: String,
    year: Number,
    director: String,
    minutes: Number,
    age_rating: Number,
    stars: Object,
    countries: Object,
    languages: Object
}