import { AxiosResponse } from 'axios';
import http from '../services/http.services'; 
import Movie from '../models/movie.entity';

class MovieService {
  public searchMoviesByTitle(title: string): Promise<Movie[]> {
    return http.get('', { params: { s: title } })
      .then(({ data }: AxiosResponse) => {
        if (data.Response === "True") {
          return data.Search.map((item: any) => new Movie(item));
        } else {
          throw new Error(data.Error);
        }
      });
  }
}

export default new MovieService();