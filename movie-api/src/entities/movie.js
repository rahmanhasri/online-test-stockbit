module.exports = class Movie {
  constructor({
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    ImdbRating,
    imdbID,
    Type,
    Poster,
    Ratings,
    Metascore,
    BoxOffice,
    Production,
  }) {
    this.title = Title;
    this.year = Year;
    this.rated = Rated;
    this.released = Released;
    this.runtime = Runtime;
    this.genre = Genre;
    this.director = Director;
    this.writer = Writer;
    this.actors = Actors;
    this.plot = Plot;
    this.language = Language;
    this.country = Country;
    this.imdbRating = ImdbRating;
    this.imdbID = imdbID;
    this.type = Type;
    this.poster = Poster;
    this.ratings = Ratings;
    this.metascore = Metascore;
    this.boxOffice = BoxOffice;
    this.production = Production;
  }
}