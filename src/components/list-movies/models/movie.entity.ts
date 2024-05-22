export default class Movie {
    public title: string;
    public year: string;
    public imdbID: string;
    public type: string;
    public poster: string;
  
    constructor(data: any = {}) {
      this.title = data.Title || '';
      this.year = data.Year || '';
      this.imdbID = data.imdbID || '';
      this.type = data.Type || '';
      this.poster = data.Poster || '';
    }
  }