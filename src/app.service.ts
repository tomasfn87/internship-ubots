import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  home(): string {
    return (
      '<a href="http://localhost:3000/movies">List all movies</a>'
    );
  }
}
