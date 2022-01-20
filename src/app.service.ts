import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  home(): string {
    return (
      `
        <div>
          <a href="http://localhost:3000/movies">
            List all movies
          </a>
          <br><br>
          <form action="" method="link" onsubmit="this.action='http://localhost:3000/movies/'+this.q.value;return true;">
            <label for="q">Search movie by mongoDb Object "_id"</label><br>
            <input type="text" id="q" name="q">
            <input type="submit" value="Search">
          </form>
        </div>
      `
    );
  }
}
